import React from "react";
import ShoppingCart from "../ShoppingCart/shoppingCart";
import UserIcon from "../UserIcon/UserIcon";
import { BrowserRouter, Route, Link } from "react-router-dom";

const TextNav = {
  HOME: "Home",
  ABOUTUS: "About Us",
  SHOP: "Shop",
  PRODUCTS: "Products",
  CATEGORIES: "Categories",
  ORDERS: "Orders",
};

const NavBar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light shadow">
      <div className="container d-flex justify-content-between align-items-center">
        <Link className="img-fluid" to="">
          <img className="nav-image" src="../src/assets/img/dapi.png" />
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#templatemo_main_nav"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="align-self-center collapse navbar-collapse flex-fill d-lg-flex justify-content-lg-end"
          id="templatemo_main_nav"
        >
          <div>
            <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  {TextNav.HOME}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutUs">
                  {TextNav.ABOUTUS}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">
                  {TextNav.SHOP}
                </Link>
              </li>
            </ul>
          </div>

          <div className="navbar align-self-center d-flex">
            <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="inputMobileSearch"
                  placeholder="Search ..."
                />
                <div className="input-group-text">
                  <i className="fa fa-fw fa-search"></i>
                </div>
              </div>
            </div>
            <a
              className="nav-icon d-none d-lg-inline"
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#templatemo_search"
            >
              <i className="fa fa-fw fa-search text-dark mr-2"></i>
            </a>
            <ShoppingCart />
            <UserIcon />
          </div>
        </div>
      </div>
    </nav>

    <div className="modal fade bg-white" id="templatemo_search" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
            <div className="w-100 pt-1 mb-5 text-right">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="" method="get" className="modal-content modal-body border-0 p-0">
                <div className="input-group mb-2">
                    <input type="text" className="form-control" id="inputModalSearch" name="q" placeholder="Search ..."/>
                    <button type="submit" className="input-group-text bg-success text-light">
                        <i className="fa fa-fw fa-search text-white"></i>
                    </button>
                </div>
            </form>
        </div>
    </div>
    </>

  );
};

export default NavBar;
