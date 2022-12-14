import React, { useContext } from 'react'
import LoginForm from '../components/loginForm/LoginForm'
import { ClientContext } from '../context/client/ClientContext'
import { Navigate, redirect } from 'react-router-dom'


const Login = () => {
    const client = useContext(ClientContext)
    return (
        <div>
            <div className='d-flex bd-highligh p-3 bg-light'>
                <div className="container c-inline-flex w-50 pt-5 bg-light rounded ">
                    <h3 className='text-center'><b className="h2 text-success">DAPI</b><b> fashion sale</b></h3>
                    <p className="text-center pt-2">Consectetur adipisicing elit. Laborum fuga incidunt
                        laboriosam voluptas iure, delectus dignissimos facilis
                        neque nulla earum.</p>
                </div>
                <LoginForm />
            </div>            
        </div>
    )
}

export default Login