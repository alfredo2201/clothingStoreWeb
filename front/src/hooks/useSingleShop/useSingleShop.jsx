import { useItem } from "../../context/item/itemContext";
import { useState } from "react";
import { useCart } from "../../context/cart/cartContext";
import Swal from "sweetalert2";
import useCartItems from "../useCartItems/useCartItems";
const useSingleShop = ()=>{
    const { item } = useItem();
    const { loadCart, cartItems } = useCart()
    const [formQuantity, setFormQuantity] = useState(1);
    const {loadCartItems} = useCartItems()
    const handleChangeQuantityItem = (quanity) => {
        setFormQuantity(quanity);
      };
    const submitAddProduct = async (e) => {
        e.preventDefault();
        try {
          let newItem = {
            id: item.id,
            name: item.name,
            price: item.price,
            size: item.size,
            srcImage: item.srcImage,
            quantity: formQuantity,
          };
          if (await loadCart(newItem)) {
            loadCartItems(cartItems);                        
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Product added to cart",
              showConfirmButton: false,
              timer: 1500,
            });
            window.scrollTo(0, 0);
          }
        } catch (error) {
          Swal.fire(error.message);
        }
      };
      return {submitAddProduct,handleChangeQuantityItem}
}
export default useSingleShop