import OrderAdmin from '../components/Orders/OrdersAdmin/OrdersAdmin'
import { useClient } from "../context/client/ClientProvider";
import { Navigate } from 'react-router-dom';
const OrdersAdmin = () => {
    const { client } = useClient();   
       
    return (    
        <div>
            {
                (client == null)? 
                <Navigate to="*" replace={true} />:
                (client.role == "admin")?
                <OrderAdmin title="Orders"></OrderAdmin>:
                <Navigate to="*" replace={true} />
            }            
        </div>
    )
}

export default OrdersAdmin