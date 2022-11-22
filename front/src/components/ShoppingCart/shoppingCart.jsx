import React from 'react';
import { useState } from 'react';
const ShoppingCart = () =>{
    const [cart, setCart] = useState(0)

    //Prueba para ver si funciona
    // const onClick = () => {        
    //     setCart(cart+1)
    // }

    return (
        <a className="nav-icon position-relative text-decoration-none" href="#">
        <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
        <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
          {cart}
        </span>
      </a>
    )
}

export default ShoppingCart