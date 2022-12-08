import { useContext, useState } from "react";
import { ClientContext } from "./ClientContext";
import { updateClient } from "../../api/client.api";
/**
 * Custom hook para retornar el contexto
 * @returns retorna el contexto
 */
export const useClient = () => {
    const context = useContext(ClientContext);
    if (!context) {
        throw new Error("Error ")
    }
    return context;
}

export const ClientContextProvider = ({ children }) => {
    const [client, setClient] = useState(null);

    (() => {
        const jsonDataClient = JSON.parse(window.localStorage.getItem('user'))
        if (jsonDataClient !== null && client === null) {            
            setClient(jsonDataClient)
        }
        // setClient(JSON.parse(window.localStorage.getItem('client')))
    })();

    const loadClient = (client) => {
        setClient(client)        
    }

    const updateClientContext = async (data) => {
        try {
            const newClient = await updateClient(data)
            console.log('newClient ->', newClient.data)
            window.localStorage.removeItem('user');
            window.localStorage.setItem('user', JSON.stringify(newClient.data));
            setClient(newClient.data)
            // window.location.reload();
        } catch (error) {
            console.log('Error to Updated client')
        }
    }

    const logOut = () => {
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('user');
        setClient(null);
    }
    return <ClientContext.Provider value={{
        client, updateClientContext, loadClient, logOut
    }}>
        {children}
    </ClientContext.Provider>

}



