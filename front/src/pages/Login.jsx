import React, { useContext } from 'react'
import LoginForm from '../components/loginForm'
import { ClientContext } from '../context/client/ClientContext'

const Login = () => {
    const client = useContext(ClientContext)
    return (
        <div>
            {/* <h1>{client}</h1> */}
            <LoginForm/>
        </div>
    )
}

export default Login