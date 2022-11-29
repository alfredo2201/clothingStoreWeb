import React from 'react'
import { Navigate } from 'react-router-dom';
import BtnLogOut from '../btnLogOut';
import { UseFormPerfil } from '../../hooks/useFormPerfil';

const FormPerfil = () => {

    const {
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
    } = UseFormPerfil();

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
                            <label>LastName</label><br></br>
                            <input type={'text'}
                                value={formLastName}
                                onChange={handleChangeFormLastName}
                                placeholder='LastName' />
                        </div>

                        <div>
                            <label>Email</label><br></br>
                            <input type={'email'}
                                value={formEmail}
                                placeholder='Email'
                                onChange={handleChangeFormEmail}
                            />
                        </div>

                        <div>
                            <label>Address</label><br></br>
                            <input type={'text'}
                                value={formAddress}
                                onChange={handleChangeFormAddress}
                                placeholder='Address' />
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