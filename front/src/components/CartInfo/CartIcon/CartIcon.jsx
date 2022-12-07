import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/cart/cartContext";
const CartIcon = () => {
  const { numberItemsCart} = useCart();  

  return (
    <Link className="nav-icon position-relative text-decoration-none" to="/cart">
      <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
      <span
        className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark"
      >
        {numberItemsCart > 0 ? numberItemsCart : ""}
      </span>
    </Link>
  );
};

export default CartIcon;
