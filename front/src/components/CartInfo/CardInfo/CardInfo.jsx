import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement } from '@stripe/react-stripe-js';
import { useClient } from '../../../context/client/ClientProvider';
import Swal from 'sweetalert2';
import useCardInfo from '../../../hooks/useCardInfo/useCardInfo';
const stripePromise = loadStripe('pk_test_51MC5YVJB2L5P0F8YoynEekwVoXf7MZCnxQY43HmELJQmBiMwNXr5ohIEhXSfMGawjI7gyzKASm58n5T7Hz2sbQvv00JRLmyxD7')

const CheckoutForm = () => {
    const {handleSubmit} = useCardInfo()
    return (
        <form onSubmit={handleSubmit}>
            <CardElement className='bg-checkout p-4 rounded' />
            <button type={'submit'} className="btn btn-success mt-4">
                Buy
            </button>
        </form>
    )
}

const CardInfo = () => {
    const { client } = useClient();    
    return (
        <div className='container p-1'>
            {(client != null) ? 
            <Elements className="m-2" stripe={stripePromise}>
                <CheckoutForm />
            </Elements> :
            <button type="button" className="btn btn-success " onClick={()=>Swal.fire('Please Start Session to Buy')}>
                  Go to checkout
            </button>
            }
        </div>
    )
}

export default CardInfo