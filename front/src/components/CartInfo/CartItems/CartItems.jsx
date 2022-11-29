import React, { useEffect, useState } from "react";
import useCartItems from "../../../hooks/useCartItems/useCartItems";

const CartItems = (props) => {
    const { name, price, image, size, onClick } = props
    const { calculateSubtotal, subtotal } = useCartItems()
    const [quantity, setQuantity] = useState(1)

    const handleOnClickPlus = () => {
        setQuantity(quantity + 1)
        calculateSubtotal(price * quantity)        
    }

    const handleOnClickMinus = () => {
        if (quantity == 1) return
        calculateSubtotal(quantity - 1)        
    }

    useEffect(() => {
        calculateSubtotal(price * quantity)        
    }, [quantity])

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
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button className="btn btn-dark px-2"
                                onClick={handleOnClickMinus}>
                                <i className="fas fa-minus"></i>
                            </button>

                            <input id="form1" min="0" name="quantity" value={quantity} type="number"
                                className="form-control" readOnly />

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