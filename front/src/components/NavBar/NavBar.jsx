import React,{useState} from "react";
import CartIcon from "../CartInfo/CartIcon/CartIcon";
import UserIcon from "../UserIcon/UserIcon";
import { Link } from "react-router-dom";
import { useClient } from "../../context/client/ClientProvider";
import LinksNavbar from "./LinksNavbar/LinksNavbar"

const NavBar = () => {  
  const {client} = useClient()  
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
          id="templatemo_main_nav">
            {
              (client != null) ?
              <LinksNavbar typeUser={client.role}></LinksNavbar>:
              <LinksNavbar typeUser="client"></LinksNavbar>

            }          
          <div className="navbar align-self-center d-flex">
            {
              (client !== null && client.role == "admin") ?
              "":
              <CartIcon />

            }             
            <UserIcon />
          </div>
        </div>
      </div>
    </nav>
    </>

  );
};

export default NavBar;
