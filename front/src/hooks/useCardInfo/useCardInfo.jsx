import { useStripe } from "@stripe/react-stripe-js";
import { useClient } from "../../context/client/ClientProvider";
import { useElements } from "@stripe/react-stripe-js";
import { useCart } from "../../context/cart/cartContext";
import { CardElement } from "@stripe/react-stripe-js";
import { saleItems } from "../../api/sale.api";
import Swal from 'sweetalert2';
const useCardInfo = () => {
    const { client } = useClient();
    const { cart, emptyCart } = useCart();

    const stripe = useStripe();
    const elements = useElements();

    console.log(cart.length)
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!client) {
            Swal.fire('Please Start Session to Buy');
        }

        if (cart.length == 0) {
            Swal.fire({
                icon: 'error',
                title: 'Cannot buy without items in cart..',
                text: 'Add items to cart'
            });
            return
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
            const { data } = await saleItems(newSale);
            (await Swal.fire({
                text: 'Successful Payment',
                timer: 2000,
            })).isConfirmed

            emptyCart();
            window.location.reload();
            return;
        }
        Swal.fire({
            text: 'Card Error',
            timer: 2000,
        })
    }
    return { handleSubmit }
}

export default useCardInfo;