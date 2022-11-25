import React, { useState } from 'react'
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
            const data = await login(email, password);
            console.log('->', data)
            //debería entrar aquí si está mal la petición, pedir ayuda
            if (data.data.message !== 'successful' || data === undefined) {
                alert('error to login');
                return;
            }

            const dataClient = {
                idClient: data.data.idClient,
                userName: data.data.userName,
                email: data.data.email
            }

            const token = data.data.token

            window.localStorage.setItem('token', token);
            window.localStorage.setItem('client', JSON.stringify(dataClient));
            await loadClient(data.data);
            // setPassword('');
            // setEmail('');
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

// export default {
//     client,
//     email,
//     password,
//     handleChangeEmail,
//     handleChangePassword,
//     handleSubmit
// }