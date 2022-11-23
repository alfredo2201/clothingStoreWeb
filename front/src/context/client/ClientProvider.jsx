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
    const [client, setClient] = useState('chanchito')

    const loadClient = async () => {
        console.log('loading client')
        //obtener cliente
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



