import React, { useState } from 'react'
import { login } from '../../api/login';
const index = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        try {
            const data = await login(email, password);
        window.localStorage.setItem('token', data.data.token);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
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