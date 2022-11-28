import { useContext, useState } from "react";
import { ClientContext } from "./ClientContext";

/**
 * Custom hook para retornar el contexto
 * @returns retorna el contexto
 */
export const useClient = () => {
    const context = useContext(ClientContext);
    if (!context) {
        throw new Error("a")
    }
    return context;
}

export const ClientContextProvider = ({ children }) => {
    const [client, setClient] = useState(null);

    (()=>{
        const jsonDataClient = JSON.parse(window.localStorage.getItem('user'))
        if(jsonDataClient !== null && client === null){
            setClient(jsonDataClient)
        }
        // setClient(JSON.parse(window.localStorage.getItem('client')))
    })();

    const loadClient = async (client) => {
        await setClient(client)
    }

    const updateClient = () => {
        //se actualiza el cliente
        console.log('updateing client...');
    }

    const logOut = () =>{
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('user');
        setClient(null);
    }
    return <ClientContext.Provider value={{
        client, updateClient, loadClient, logOut 
    }}>
        {children}
    </ClientContext.Provider>

}



