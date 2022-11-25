import React from "react";
import { Link } from "react-router-dom";

const ProductPost = (props) => {
    const {srcImage, name, price} = props;
    return (
        <div className="col-md-3">
            <div className="card mb-4 product-wap rounded-0">
                <div className="card rounded-0">
                    <img className="card-img rounded-0 img-fluid" src= {srcImage}/>
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                        <ul className="list-unstyled">
                            <li><Link className="btn btn-success text-white mt-2" to="/singleShop"><i className="fas fa-cart-plus"></i></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="card-body text-center">
                    <a href="shop-single.html" className="h3 text-decoration-none">{name}</a>
                    <p className=" mb-0">{price}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductPost;