import React, { useState } from 'react'
import FormAddItem from '../components/FormAddItem';
import { useClient } from "../context/client/ClientProvider";
import { Navigate } from 'react-router-dom';
const AddItem = () => {
    const { client } = useClient();  
    console.log(client)
    return (    
        <div>
            {
                (client == null)? 
                <Navigate to="*" replace={true} />:
                (client.role == "admin")?
                <FormAddItem title="Add"/>:
                <Navigate to="*" replace={true} />
            }            
        </div>
    )
}

export default AddItem