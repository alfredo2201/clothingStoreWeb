const ProductInfo = (props) => {
    const {idProduct, name, price, quantity, size, img} = props;
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
            <p><span className="text-muted">Quantity: </span>{quantity}</p>
            <p><span className="text-muted">Size: </span>{size}</p>
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3">
            <button type="button" className="btn btn-dark">
                EDIT
            </button>
            <button type="button" className="btn btn-delete">
                DELETE
            </button>
        </div>
    </div>)
}

export default ProductInfo 