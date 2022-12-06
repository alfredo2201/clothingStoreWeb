import useCartItems from "../../../hooks/useCartItems/useCartItems";
import CartItems from "../CartItems/CartItems";
import Banner from "../../Banner/Banner";
const CartInfo = () => {    
    const {cartItems,numberItemsCart,handleOnDelete,total,subtotal} = useCartItems()

        return (
        <>
            <Banner titleDark="Shopping" titleGreen="Cart" description="It's so close but so far"></Banner>
            <section className="h-100 gradient-custom">
                <div className="container py-5">
                    <div className="row d-flex justify-content-center my-4">
                        <div className="col-md-8">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h3 className="title-left mb-0">Cart - {numberItemsCart} items</h3>
                                </div>
                                {cartItems.map((product) => (
                                    <CartItems key={product.id} 
                                    name={product.name} 
                                    price={product.price} 
                                    image={product.srcImage} 
                                    size={product.size}
                                    originalQuantity={product.quantity}
                                    onClick={handleOnDelete.bind(this,product.id)}>
                                    </CartItems>                                    
                                ))}
                            </div>
                            <div className="card mb-lg-0 card-body">
                                <div className="col-md-12">
                                    <div className="form-group mb-3"><label className="form-label">
                                        <strong>Write your address</strong>
                                        <br /></label><input className="form-control" type="input" required autoComplete="off" placeholder="Address" /></div>
                                </div>
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
                        <div className="col-md-4">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h3 className="title-left mb-0">Summary</h3>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li
                                            className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            <strong>Products</strong>
                                            <span>${subtotal}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                            <strong>Shipping</strong>
                                            <span>Free</span>
                                        </li>
                                        <li
                                            className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                            <div>
                                                <strong>Total amount</strong>
                                            </div>
                                            <span><strong>${total}</strong></span>
                                        </li>
                                    </ul>
                                    <button type="button" className="btn btn-success">
                                        Go to checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}

export default CartInfo;