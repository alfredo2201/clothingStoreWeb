import Swal from "sweetalert2";
import { deleteProduct } from "../../../../api/items";

const ProductInfo = (props) => {
    const {idProduct, name, price, stock, size, img} = props;

    const handleDelete = async() =>{
        await deleteProduct(idProduct);
        (await Swal.fire('Deleted Product')).isConfirmed
        window.location.reload();
    }
    return (
    <div className="row d-flex justify-content-between align-items-center">
        <div className="col-md-2 col-lg-2 col-xl-2">
            <img src={img} className="img-fluid image-show" alt="Cotton T-shirt" />
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3">
            <p><span className="text-muted">ID: </span>{idProduct}</p>
            <p><span className="text-muted">Name: </span>{name}</p>
            <p><span className="text-muted">Price: </span>${price}</p>
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3">
            <p><span className="text-muted">Stock: </span>{stock}</p>
            <p><span className="text-muted">Size: </span>{size}</p>
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3">
            <button type="button" className="btn btn-delete"
            onClick={handleDelete}
            >
                DELETE
            </button>
        </div>
    </div>)
}

export default ProductInfo 