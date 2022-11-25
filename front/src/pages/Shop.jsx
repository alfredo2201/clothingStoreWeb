import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Carrusel from "../components/Carrusel/Carrusel";
import ListProducts from "../components/ListProducts/ListProducts";
import Footer from "../components/Footer/Footer";
import { useClient } from "../context/client/ClientProvider";

const Shop = () => {
  const {client} = useClient();
  return (
    <div>
      {/* <NavBar></NavBar> */}
      <h1>Parte del Shop</h1>
      {
        (client === null) ?
        null:
        <h2>{client.name}</h2>
      }
    </div>
  );
};

export default Shop