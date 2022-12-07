import { useState, useEffect } from 'react'
import { useItem } from '../../context/item/itemContext';
import Swal from 'sweetalert2';
import { useCart } from '../../context/cart/cartContext';
// Agregar a carrito 
// eliminar un item del carrito

const useCartItems = () => {
    const { item } = useItem();
    const { cart, loadCart, numberItemsCart, updateQuantity, removeCartItem} = useCart();
    const [cartItems, setCartItems] = useState([])
    const [numberItems, setNumberItems] = useState(numberItemsCart)
    const [lastUpdated, setLastUpdated] = useState(0)
    const [formQuantity, setFormQuantity] = useState(1);
    const [subtotal, setSubtotal] = useState(0)
    const [total, setTotal] = useState(0)

    
    const calculateSubtotal = () => {
        let price = 0
        cartItems.forEach((i) => {
            price += i.price * i.quantity
        })
        setTotal(price)
        setSubtotal(price)
    }    

    const handleOnDelete = async (key) => {
        removeCartItem(key)        
    }

    const submitAddProduct = async (e) => {
        e.preventDefault()
        try {
            let newItem = {
                id: item.id,
                name: item.name,
                price: item.price,
                size: item.size,
                srcImage: item.srcImage,
                quantity: formQuantity
            }
            if (await loadCart(newItem)) {
                setCartItems(cartItems)
                setNumberItems(numberItemsCart) 
                calculateSubtotal()
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Product added to cart',
                    showConfirmButton: false,
                    timer: 1500
                  })                        
                window.scrollTo(0, 0);                
            }
        } catch (error) {
            Swal.fire(error.message)
        }
    }


    const handleChangeQuantityItem = (quanity) => {
        setFormQuantity(quanity);
    }

    const update = async (key,num) => {        
        if(!updateQuantity(key,num)) 
        setLastUpdated(num)   
        setCartItems([])
        await calculateSubtotal()
    }

    useEffect(() => {
        console.log("Subtotal",subtotal)        
        setCartItems(cart)                
        setNumberItems(cart.length)        
    }, [cartItems])

    return { handleChangeQuantityItem,setNumberItems, cartItems, handleOnDelete,update, numberItemsCart, subtotal, total, calculateSubtotal, submitAddProduct }
}

export default useCartItems