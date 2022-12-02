import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { useClient } from '../../context/client/ClientProvider';
import { login } from '../../api/login';


export const useLogin = () => {
    const { client, loadClient } = useClient();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if(email =='' || password=='') {
                Swal.fire('Email or password is empty')                
                return
            }            
            const data = await login(email, password);          
            //debería entrar aquí si está mal la petición, pedir ayuda
            if (data.data.message !== 'successful' || data === undefined) {
                Swal.fire('Error to login')                
                return;
            }

            const dataClient = {
                id: data.data.idClient,
                userName: data.data.userName,
                name: data.data.name,
                lastName: data.data.lastName,
                email: data.data.email,
                address: data.data.address, 
                role:data.data.role,
                img: data.data.imgPerfil
            }            
            const token = data.data.token

            window.localStorage.setItem('token', token);
            window.localStorage.setItem('user', JSON.stringify(dataClient));
            await loadClient(dataClient);
            setPassword('');
            setEmail('');
        } catch (error) {
            console.log(error);
        }
    }
    return {
        client,
        email,
        password,
        handleChangeEmail,
        handleChangePassword,
        handleSubmit
    }
}