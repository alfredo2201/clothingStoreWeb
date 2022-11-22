import React from "react";
import ShoppingCart from "../ShoppingCart/shoppingCart";
import UserIcon from "../UserIcon/userIcon";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow">
      <div className="container d-flex justify-content-between align-items-center">
        <a className="img-fluid" href="index.html">
          <img className="nav-image" src="../src/assets/img/dapi.png" />
        </a>

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
                <a className="nav-link" href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="shop.html">
                  Shop
                </a>
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
              <i className="fa fa-fw fa-search text-dark mr-2">

              </i>
            </a>
            <ShoppingCart />
            <UserIcon/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
