import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
const UserIcon = () => {
  return (
    //Aqui debe de ir un poco de lógica para obtener la foto del usuario
    <Link className="nav-icon position-relative text-decoration-none" to="auth/login">
      <i className="fa fa-fw fa-user text-dark mr-3"></i>
    </Link>
  );
};

export default UserIcon;