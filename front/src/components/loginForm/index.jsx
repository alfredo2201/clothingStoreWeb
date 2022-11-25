import React, { useState } from 'react'
import { Navigate, redirect } from 'react-router-dom';
import { login } from '../../api/login';
import { useClient } from '../../context/client/ClientProvider';
import { useLogin } from '../../hooks/LoginHook';

const index = () => {
    const {
        client,
        email,
        password,
        handleChangeEmail,
        handleChangePassword,
        handleSubmit } = useLogin()

    return (
        <div>
            {
                //redirecciona si hay un usuario
                (client !== null) && (
                    // console.log('clientL ->', client)
                    <Navigate to='/' replace={true} />
                )
            }

            {/* {
                (client !== null) ?
                    <h2>{clientLogin}</h2>
                    :
                    null
            } */}
            <form onSubmit={handleSubmit}>
                <label name='email'>Email</label>
                <input
                    onChange={handleChangeEmail}
                    value={email}
                    type={'text'}
                    placeholder={'Wite Your Email'}
                />

                <label name='password'>Password</label>
                <input
                    onChange={handleChangePassword}
                    value={password}
                    type={'password'}
                    placeholder={'Wite Your Password'}
                />

                <button type={'submit'}>Login</button>
            </form>
        </div>
    )
}

export default index