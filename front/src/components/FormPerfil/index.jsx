import React, { useState } from 'react'
import { Navigate, redirect } from 'react-router-dom';
import { useClient } from '../../context/client/ClientProvider';
import BtnLogOut from '../btnLogOut';


const FormPerfil = () => {
    const { client, updateClientContext } = useClient();
    const [formUserName, setFormUserName] = useState(client.userName);
    const [formName, setFormName] = useState(client.name);
    const [formEmail, setFormEmail] = useState(client.email);

    const handleChangeformUserName = (event) => {
        setFormUserName(event.target.value);
    }

    const handleChangeFormName = (event) => {
        setFormName(event.target.value)
    }

    const handleChangeFormEmail = (event) => {
        setFormEmail(event.target.value)
    }

    const submitFormPerfil =async(event) =>{
        event.preventDefault();
        const newData = {
            // idClient: client.id,
            name: formName,
            userName: formUserName,
            email: formEmail
        }

        const updatedData = {...client, ...newData}

        
        // console.log(updatedData)
        await updateClientContext(updatedData);
        alert('Updated User')
        // window.location.reload();
    }


    return (
        <>
            <div>
                {
                    (client === null) && (
                        <Navigate to='/' replace={true} />
                    )
                }


                <div>
                    <h1>About You {client.name}</h1>
                </div>

                <div>
                    <form onSubmit={submitFormPerfil}>
                        <div>
                            <label>UserName</label><br></br>
                            <input type={'text'}
                                value={formUserName}
                                onChange={handleChangeformUserName}
                                placeholder='UserName' />
                        </div>

                        <div>
                            <label>Name</label><br></br>
                            <input type={'text'}
                                value={formName}
                                onChange={handleChangeFormName}
                                placeholder='Name' />
                        </div>

                        <div>
                            <label>Email</label><br></br>
                            <input type={'text'}
                                value={formEmail}
                                placeholder='Email'
                                onChange={handleChangeFormEmail}
                            />
                        </div>

                        <div>
                            <button type={'submit'}>Save</button>
                            <BtnLogOut />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}

export default FormPerfil