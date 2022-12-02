import ProductAdmin from "../components/ListProducts/ProductosAdmin/ProductAdmin"
import { useClient } from "../context/client/ClientProvider";
import { Navigate } from 'react-router-dom';
const ProductsAdmin = () =>{
    const { client } = useClient();   
    return (
        <div>
        {
            (client == null)? 
            <Navigate to="*" replace={true} />:
            (client.role == "admin")?
            <ProductAdmin></ProductAdmin>:
            <Navigate to="*" replace={true} />
        }            
    </div>
    )
}

export default ProductsAdmin