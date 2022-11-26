import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Carrusel from "../components/Carrusel/Carrusel";
import ListProducts from "../components/ListProducts/ListProducts";
import Footer from "../components/Footer/Footer";
import { useClient } from "../context/client/ClientProvider";
import TitleList from "../components/ListProducts/TitleList/TitleList";
import Categories from "../components/ListProducts/Categories/Categories";

const Shop = () => {
  const {client} = useClient();
  return (
    <div>
      {/* <NavBar></NavBar> */}

      <ListProducts title="Categories"></ListProducts>
      
      {/* {        
        (client === null) ?
        <h1>No ha iniciado sesion</h1>:
        <h2>{client.name}</h2>
      } */}
    </div>
  );
};

export default Shop