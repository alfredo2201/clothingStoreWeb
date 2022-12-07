import React from 'react'
import { Navigate } from 'react-router-dom';
import { useClient } from '../../context/client/ClientProvider';

const BtnLogOut = () => {

    const {logOut, client} = useClient()

    const handleLogOut = () =>{
        // window.location.reload();
        logOut();
    }
    return (
        <>
            <button className="btn btn-dark w-100 py-2" type={'button'} onClick={handleLogOut}>Log Out</button>
            {/* {
                ((client === null) && (
                    <Navigate to = '/' />
                ))
            } */}
        </>
    )
}

export default BtnLogOut;