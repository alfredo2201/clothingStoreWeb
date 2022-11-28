import React from 'react'
import { Navigate } from 'react-router-dom';
import { useClient } from '../../context/client/ClientProvider';

const BtnLogOut = () => {

    const {logOut, client} = useClient()

    const handleLogOut = () =>{
        logOut();
        window.location.reload();
        // return <Navigate to='/' />
    }
    return (
        <>
            <button type={'button'} onClick={handleLogOut}>Log Out</button>
            {/* {
                ((client === null) && (
                    <Navigate to = '/' />
                ))
            } */}
        </>
    )
}

export default BtnLogOut;