import React from "react";

const Categories = () => {
    return (
        <div className="row">
            <div className="col-md-6">
                <ul className="list-inline shop-top-menu pb-3 pt-1">
                    <li className="list-inline-item">
                        <a className="h3 text-dark text-decoration-none mr-3" href="#">All</a>
                    </li>
                    <li className="list-inline-item">
                        <a className="h3 text-dark text-decoration-none mr-3" href="#">Men's</a>
                    </li>
                    <li className="list-inline-item">
                        <a className="h3 text-dark text-decoration-none" href="#">Women's</a>
                    </li>
                </ul>
            </div>
            <div className="col-md-6 pb-4">
                <div className="d-flex">
                    <select className="form-control">
                        <option>Featured</option>
                        <option>A to Z</option>
                        <option>Item</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Categories;
