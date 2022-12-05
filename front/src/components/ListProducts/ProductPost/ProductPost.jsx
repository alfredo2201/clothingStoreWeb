import React from "react";
import { Link } from "react-router-dom";
import { useItem } from "../../../context/item/itemContext";

const ProductPost = (props) => {
    const {id ,srcImage, name, price, size, stock } = props;
    const {loadItem} = useItem();
    const handleClick = () =>{
        loadItem( {id, name ,srcImage, price, size, stock } );
    }
    return (
        // <ItemContextProvider>
        <div className="col-md-3">
            <div className="card mb-4 product-wap rounded-0">
                <div className="card rounded-0">
                    <img className="card-img rounded-0 img-fluid" src={srcImage} />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                        <ul className="list-unstyled">
                            {/* <li><Link className="btn btn-success text-white mt-2" to="/singleShop"><i className="fas fa-cart-plus"></i></Link></li> */}
                            <li onClick={handleClick}><Link className="btn btn-success text-white mt-2" to="/singleShop"><i className="fas fa-cart-plus"></i></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="card-body text-center">
                    <a href="shop-single.html" className="h3 text-decoration-none">{name}</a>
                    <p className="h3 text-decoration-none">Size: {size}</p>
                    <p className="h3 text-decoration-none">Stock: {stock}</p>
                    <p className=" mb-0">${price}</p>
                </div>
            </div>
        </div>
        // </ItemContextProvider>
    )
}

export default ProductPost;