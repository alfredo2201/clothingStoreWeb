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
    // const [client, setClient] = useState({
    //     idClient: '',
    //     userName: '',
    //     name: '',
    //     email: '',
    //     token: '',
    // })

    (()=>{
        console.log('client->', JSON.parse(window.localStorage.getItem('client')))
    })();

    const [client, setClient] = useState(null);

    const loadClient = async (client) => {
        await setClient(client)
    }

    const updateClient = () => {
        //se actualiza el cliente
        console.log('updateing client...');
    }

    return <ClientContext.Provider value={{
        client, updateClient, loadClient
    }}>
        {children}
    </ClientContext.Provider>

}



