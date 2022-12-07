import React, { useEffect, useState } from "react";
import useCartItems from "../../../hooks/useCartItems/useCartItems";

const CartItems = (props) => {
    const { id,name, price, image, size,originalQuantity, onClick } = props
    const {update} = useCartItems()
    const [quantity, setQuantity] = useState(originalQuantity)

    const handleOnClickPlus = () => {
        let newQuantity = quantity + 1
        setQuantity(newQuantity)           
        update(id,newQuantity)            
    }

    const handleOnClickMinus = () => {
        if (quantity == 1) return
        let newQuantity = quantity-1
        setQuantity(newQuantity)        
        update(id,newQuantity)          
    }
    return (
        <div className="car-example">
            <div>
                <div className="p-4">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                            <img src={image}
                                className="img-fluid image-show" alt="Cotton T-shirt" />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                            <p className="lead fw-normal mb-2">{name}</p>
                            <p><span className="text-muted">Size: </span>{size}</p>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex p-1">
                            <button className="btn btn-dark px-2"
                                onClick={handleOnClickMinus}>
                                <i className="fas fa-minus"></i>
                            </button>

                            <span id="form-cart" min="0" name="quantity" value={quantity} type="number"
                                className="form-control">{quantity}</span>

                            <button className="btn btn-dark px-2"
                                onClick={handleOnClickPlus}>
                                <i className="fas fa-plus"></i>
                            </button>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h5 className="mb-0">${price}.00</h5>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#!" className="text-danger" onClick={onClick}><i className="fas fa-trash fa-lg"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems;