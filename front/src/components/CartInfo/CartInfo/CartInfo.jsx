import useCartItems from "../../../hooks/useCartItems/useCartItems";
import CartItems from "../CartItems/CartItems";
import Banner from "../../Banner/Banner";
import { useEffect, useState } from "react";
import CartSummary from "../CartSummary/CartSummry";
const CartInfo = () => {    
    const {cartItems,numberItems,handleOnDelete,subtotal} = useCartItems()

        return (
        <>
            <Banner titleDark="Shopping" titleGreen="Cart" description="It's so close but so far"></Banner>
            <section className="h-100 gradient-custom">
                <div className="container py-5">
                    <div className="row d-flex justify-content-center my-4">
                        <div className="col-md-8">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h3 className="title-left mb-0">Cart - {numberItems} items</h3>
                                </div>
                                {cartItems.map((product) => (
                                    <CartItems key={product.id} 
                                    id={product.id}
                                    name={product.name} 
                                    price={product.price} 
                                    image={product.srcImage} 
                                    size={product.size}
                                    originalQuantity={product.quantity}
                                    onDelete={handleOnDelete.bind(this,product.id)}>
                                    </CartItems>                                    
                                ))}
                            </div>                            
                            <div className="card mb-4 mb-lg-0 mt-4">
                                <div className="card-body">
                                    <p><strong>We accept</strong></p>
                                    <img className="me-2" width="45px"
                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                                        alt="Visa" />
                                    <img className="me-2" width="45px"
                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                                        alt="American Express" />
                                    <img className="me-2" width="45px"
                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                                        alt="Mastercard" />
                                </div>
                            </div>
                        </div>
                        <CartSummary></CartSummary>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CartInfo;