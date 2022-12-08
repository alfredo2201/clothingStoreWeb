import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { saleItems } from '../../../api/sale.api';
import { useCart } from '../../../context/cart/cartContext';
import { useClient } from '../../../context/client/ClientProvider';
import Swal from 'sweetalert2';
import useCartItems from '../../../hooks/useCartItems/useCartItems';
const stripePromise = loadStripe('pk_test_51MCUiwA7VCVs4t0KNOmcuHbJnOpcmrPmi91TvEnZGrWwGonfciuLrFGILU9a2AepzRBjVAsIc3CKsDyLEQeNOLVS00MBcBPqWm')

const CheckoutForm = () => {
    const { client } = useClient();
    const { cart, emptyCart } = useCart();

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!client) {
            Swal.fire('Please Start Session to Buy');
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        })
        if (!error) {
            const card = paymentMethod.card.last4;
            const company = paymentMethod.card.brand;
            const { funding } = paymentMethod.card;
            const { id } = paymentMethod;
            
            const newSale = {
                idStripe: id,
                idClient: client.id,
                paymentMethod: funding,
                card: card,
                brand: company,
                items: cart
            }
            const {data} = await saleItems(newSale);
            (await Swal.fire({
                text: 'Successful Payment',
                timer: 2000,
            })).isConfirmed

            emptyCart();
            window.location.reload();
            // elements.getElement(CardElement).clear();
            return;
        }
        Swal.fire({
            text: 'Card Error',
            timer: 2000,
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type={'submit'} className="btn btn-success">
                Buy
            </button>
            {/* <h1>hola mundo</h1> */}
        </form>
    )
}

const CardInfo = () => {
    return (
        <div className='container p-4'>

            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    )
}

export default CardInfo