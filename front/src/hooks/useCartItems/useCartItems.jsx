import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useCart } from "../../context/cart/cartContext";

const useCartItems = () => {
  const { cart, numberItemsCart, updateQuantity, removeCartItem,calculateSubtotal } =
    useCart();
  const [cartItems, setCartItems] = useState(cart);
  const [numberItems, setNumberItems] = useState(numberItemsCart);
  const [lastUpdated, setLastUpdated] = useState(0);
  const [subtotal, setSubtotal] = useState(calculateSubtotal);
  const [total, setTotal] = useState(0);

  const calculateSubtotalS = () => {
    let price = 0;
    cartItems.forEach((i) => {
      price += i.price * i.quantity;      
    });    
    setTotal(price);
    setSubtotal(price);  
    return price  
  };

  const handleOnDelete = async (key) => {
    removeCartItem(key);
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Product deleted successfully",
        showConfirmButton: false,
        timer: 1500,
      }).then(location.reload());    
  };

  const update = async (key, num) => {
    if (!updateQuantity(key, num)) 
    setLastUpdated(num);
    setCartItems([]);
    calculateSubtotalS();
    location. reload()
  };

  const loadCartItems = (cart) =>{
    setCartItems(cart)
  }

  useEffect(() => {
    setCartItems(cart);
    setNumberItems(cart.length);
  },[]);

  return {
    setNumberItems,
    cartItems,
    handleOnDelete,
    update,
    numberItems,
    lastUpdated,
    subtotal,
    total,
    calculateSubtotalS,
    loadCartItems
  };
};

export default useCartItems;
