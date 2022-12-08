import useCartItems from "../../../hooks/useCartItems/useCartItems"
import CardInfo from "../CardInfo/CardInfo"
const CartSummary = () => {
    const { subtotal, total } = useCartItems()    

    return (<div className="col-md-4">
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

                <CardInfo />
            </div>
        </div>
    </div>)
}

export default CartSummary