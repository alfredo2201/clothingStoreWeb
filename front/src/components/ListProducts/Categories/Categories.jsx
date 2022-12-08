import React, {useState} from "react";
import useAllProducts from "../../../hooks/useAllProducts/useAllProducts";
const Categories = () => {   
    const {handleOnChangeCategory,categories,filterProducts} = useAllProducts()
    return (
        <div className="row">
            <div className="col-md-6">
                <ul className="list-inline shop-top-menu pb-3 pt-1" onChange={handleOnChangeCategory}>
                    <li className="list-inline-item">
                        <a className="h3 text-dark text-decoration-none mr-3" value={categories.All} onClick={handleOnChangeCategory}>{categories.All}</a>
                    </li>
                    <li className="list-inline-item">
                        <a className="h3 text-dark text-decoration-none mr-3" value={categories.Men} onClick={handleOnChangeCategory}>{categories.Men}</a>
                    </li>
                    <li className="list-inline-item">
                        <a className="h3 text-dark text-decoration-none" value={categories.Women} onClick={handleOnChangeCategory}>{categories.Women}</a>
                    </li>
                </ul>
            </div>
            <div className="col-md-6 pb-4">
                <div className="d-flex">
                    <select className="form-control" onChange={filterProducts}>
                        <option>Featured</option>
                        <option>A to Z</option>
                        <option>Higest price</option>
                        <option>Lowest price</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Categories;
