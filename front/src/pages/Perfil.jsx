import React from "react";
import { Navigate } from "react-router-dom";
import { useClient } from "../context/client/ClientProvider";
import FormPerfil from "../components/FormPerfil";
import OrdersProfile from "../components/Orders/OrdersProfile";

const Perfil = () => {
  const { client } = useClient();  
  return (
    <>
      {
        // (client === null) && (
        //     <Navigate to='/' replace={true} />
        // )
        client === null ? (
          <Navigate to="/auth/login" replace={true} />
        ) : (
          <>          
          <FormPerfil />
          </>
        )
      }
    </>
  );
};

export default Perfil;
