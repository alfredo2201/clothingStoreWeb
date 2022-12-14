import React from "react";
import { Link } from "react-router-dom";
import { useClient } from "../../context/client/ClientProvider";
const UserIcon = () => {
  const { client } = useClient() 
  return (
    <Link className="nav-icon position-relative text-decoration-none" to="auth/login">
      {
        (client != null && client.img != undefined) ?
          <img className="fa fa-fw fa-user mx-auto mr-3 rounded" src={client.img}></img> 
          : 
          <i className="fa fa-fw fa-user text-dark mr-3"></i>
      }
    </Link>
  );
};

export default UserIcon;