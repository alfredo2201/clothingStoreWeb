import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Carrusel from "../components/Carrusel/Carrusel";
import ListProducts from "../components/ListProducts/ListProducts";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      {/* <NavBar></NavBar> */}
      <Carrusel></Carrusel>
      <ListProducts title="Check at our products"></ListProducts>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Home
