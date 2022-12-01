import {useState} from 'react'
// Agregar a carrito 
// eliminar un item del carrito

const useCartItems = () => {    
    const products = [
        {
            id: "QWERT1",
            name: "Basic T-shirt White",
            size: "M",
            price: 499,
            image: "../src/assets/img/shop_01.jpg"
        },
        {
            id: "QWERT2",
            name: "Basic T-shirt Gray",
            size: "M",
            price: 499,
            image: "../src/assets/img/shop_02.jpg"
        }
    ]    
    // window.localStorage.setItem("cartItems",JSON.stringify(products)) 
    const [cartItems,setCartItems] = useState([])
    const [numberItemsCart, setNumberItemsCart] = useState(cartItems.length) 
    const [subtotal, setSubtotal] = useState(0)    
    const [total, setTotal] = useState(0)

    const calculateSubtotal = (price, quantity) =>{
        let operationSubtotal = subtotal + (price * quantity)
        setSubtotal(operationSubtotal)            
    }
    
    const handleOnDelete = (key) => {            
        let auxItems = {}
        cartItems.forEach(element => {
            if (element.id === key) {
                auxItems = element
            }
        });           
        let item = cartItems.indexOf(auxItems)        
        const newData = cartItems.splice((item+1), 1)                    
        window.localStorage.setItem("cartItems",JSON.stringify(newData))  
        setNumberItemsCart(newData.length)
        setCartItems(newData)
    }

    
    
    return {cartItems, numberItemsCart,handleOnDelete, subtotal,total, calculateSubtotal}
}

export default useCartItems