import React, {useState} from 'react'
import Swal from 'sweetalert2';
import { useClient } from '../../context/client/clientProvider';

export const UseFormPerfil = () => {

    const { client, updateClientContext } = useClient();
    const [formUserName, setFormUserName] = useState(client.userName);
    const [formName, setFormName] = useState(client.name);
    const [formLastName, setFormLastName] = useState(client.lastName);
    const [formEmail, setFormEmail] = useState(client.email);
    const [formAddress, setFormAddress] = useState(client.address)

    const handleChangeformUserName = (event) => {
        setFormUserName(event.target.value);
    }

    const handleChangeFormName = (event) => {
        setFormName(event.target.value)
    }

    const handleChangeFormEmail = (event) => {
        setFormEmail(event.target.value)
    }

    const handleChangeFormLastName = (event) => {
        setFormLastName(event.target.value)
    }

    const handleChangeFormAddress = (event) => {
        setFormAddress(event.target.value);
    }

    const submitFormPerfil = async (event) => {
        event.preventDefault();

        if (!formName || !formUserName || !formLastName
            || !formEmail || !formAddress) {
            alert('please fill out the form correctly')
        }

        const newData = {
            // idClient: client.id,
            name: formName,
            userName: formUserName,
            lastName: formLastName,
            email: formEmail,
            address: formAddress
        }
        
        const updatedData = { ...client, ...newData }
        // console.log(upd)
        console.log('->',updatedData);
        await updateClientContext(updatedData);
        Swal.fire('Updated User')
    }
    return {
        client,
        formUserName,
        formName,
        formLastName,
        formEmail,
        formAddress,
        handleChangeFormAddress,
        handleChangeFormEmail,
        handleChangeFormLastName,
        handleChangeFormName,
        handleChangeformUserName,
        submitFormPerfil
    }
}

