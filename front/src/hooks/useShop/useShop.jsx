import useCartItems from '../useCartItems/useCartItems';
import {useClient} from "../../context/client/ClientProvider"
import Swal from 'sweetalert2';

export const useShop = () =>{
    const {cartItems,subtotal, total} = useCartItems()
    const {client} = useClient()
    

    const submitShop = () =>{
        if(client != null){

        }
        Swal.fire("Need to register")
    }

    return {submitShop}
}

export default useShop;