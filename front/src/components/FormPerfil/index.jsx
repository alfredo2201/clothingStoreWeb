import React, { useState } from 'react'
import { Navigate, redirect } from 'react-router-dom';
import { useClient } from '../../context/client/ClientProvider';
import BtnLogOut from '../btnLogOut';


const FormPerfil = () => {
    const { client } = useClient();
    const [formUserName, setFormUserName] = useState(client.userName);
    const [formName, setFormName] = useState(client.Name);
    const [formEmail, setFormEmail] = useState(client.Email);

    const handleChangeformUserName = (event) => {
        setFormUserName(event.target.value);
    }

    const handleChangeFormName = (event) => {
        setFormName(event.target.value)
    }

    const handleChangeFormEmail = () => {
        setFormEmail(event.target.value)
    }

    const submitFormPerfil = () =>{
        console.log('actualizando...');
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
                    <form >
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