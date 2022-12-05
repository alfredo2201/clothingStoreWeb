import { useContext, createContext, useState } from "react";

const ItemContext = createContext();

export const useItem = () => {
    const context = useContext(ItemContext);
    if (!context) {
        throw new Error("Error ")
    }
    return context;
}

export const ItemContextProvider = ({ children }) => {
    const [item, setITem] = useState(null);

    (() => {
        const jsonDataClient = JSON.parse(window.localStorage.getItem('item'))
        if (jsonDataClient !== null && item === null) {            
            setITem(jsonDataClient)
        }
    })();

    const loadItem = async(newItem) => {
        await window.localStorage.setItem('item', JSON.stringify(newItem));

        await setITem(newItem);
    }

    return <ItemContext.Provider value={{
        item, loadItem
    }}>
        {children}
    </ItemContext.Provider>
}

