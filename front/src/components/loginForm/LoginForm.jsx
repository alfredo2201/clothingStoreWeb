import React, { useState } from 'react'
import { Navigate, redirect } from 'react-router-dom';
// import { login } from '../../api/login';
// import { useClient } from '../../context/client/ClientProvider';
import { Link } from 'react-router-dom';
import { useLogin } from '../../hooks/LoginHook';
import TitleList from '../ListProducts/TitleList/TitleList'
const LoginForm = () => {
    const { client, email, password, handleChangeEmail, handleChangePassword, handleSubmit } = useLogin()

    return (
            <div className="container c-inline-flex w-50 px-4 mx-5 my-3 shadow-lg p-3 mb-5 bg-white  rounded-form ">
                {
                    //redirecciona si hay un usuario
                    (client !== null) && (
                        // console.log('clientL ->', client)
                        <Navigate to='/perfil' replace={true} />
                    )
                }

                {/* {
                (client !== null) ?
                    <h2>{clientLogin}</h2>
                    :
                    null
            } */}
                <form onSubmit={handleSubmit}>
                    <TitleList title="Login"></TitleList>
                    <div className="form-group m-3">
                        <label name='email'>Email address</label>
                        <input
                            className="form-control col-md-6"
                            onChange={handleChangeEmail}
                            value={email}
                            type="email"
                            placeholder="Enter email"
                            
                        />
                    </div>
                    <div className="form-group m-3">
                        <label name='password'>Password</label>
                        <input
                            className="form-control"
                            onChange={handleChangePassword}
                            value={password}
                            type='password'
                            placeholder="Password"
                            />
                    </div>
                    <small id="emailHelp" className="form-text text-muted mx-3">We'll never share your email with anyone else.</small>                        
                    <div className="form-group m-3 text-center">                    
                        <button className="btn btn-dark w-75 py-2" type='submit'>Login</button>
                    </div>
                </form>
                <div className="text-center mt-2"><Link className="link-view" to="/noPage">Forgot Password?</Link></div>
                <div className="text-center mt-2"><Link className="link-view" to="/auth/register">Create account</Link></div>
            </div>
    )
}

export default LoginForm;