import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const CartIcon = () => {
  const [cart, setCart] = useState(0);

  return (
    <Link className="nav-icon position-relative text-decoration-none" to="/cart">
      <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
      <span
        className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark"       
      >
        {cart > 0 ? cart : ""}
      </span>
    </Link>
  );
};

export default CartIcon;
