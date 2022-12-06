import { useState, useEffect } from 'react'
import { useItem } from '../../context/item/itemContext';
import Swal from 'sweetalert2';
import { useCart } from '../../context/cart/cartContext';
// Agregar a carrito 
// eliminar un item del carrito

const useCartItems = () => {
    const { item } = useItem();
    const { cart, loadCart, numberItemsCart, removeCartItem } = useCart();
    const [cartItems, setCartItems] = useState([])
    const [numberItems, setNumberItems] = useState(numberItemsCart)
    const [formQuantity, setFormQuantity] = useState(1);
    const [subtotal, setSubtotal] = useState(0)
    const [total, setTotal] = useState(0)


    const calculateSubtotal = async () => {
        let price = 0
        cartItems.forEach((i) => {
            price += i.price * i.quantity
        })
        await setSubtotal(price)
    }

    const handleOnDelete = async (key) => {
        removeCartItem(key)
        calculateSubtotal()
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
                // console.log("before cart ->",cartItems) 
                Swal.fire("Product added to cart")
            }
        } catch (error) {
            Swal.fire(error.message)
        }
    }


    const handleChangeQuantityItem = (quanity) => {
        setFormQuantity(quanity);
    }

    useEffect(() => {
        setCartItems(cart)
        setNumberItems(cart.length)
        calculateSubtotal()
    }, [cartItems])

    return { handleChangeQuantityItem, cartItems, handleOnDelete, numberItemsCart, subtotal, total, calculateSubtotal, submitAddProduct }
}

export default useCartItems