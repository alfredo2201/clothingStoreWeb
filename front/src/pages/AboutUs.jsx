import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Carrusel from "../components/Carrusel/Carrusel";
import ListProducts from "../components/ListProducts/ListProducts";
import Footer from "../components/Footer/Footer";

const AboutUs = () => {
  return (
    <>
        <NavBar></NavBar>
        <section className="bg-success_gray py-5">
        <div className="container">
            <div className="row align-items-center py-5">
                <div className="col-md-8 list-inline">
                    <h1 className=" h1 list-inline-item"><b>Who is</b></h1><h1 className="text-success list-inline-item">DAPI</h1><h1 className="list-inline-item">?</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className="col-md-4">
                    <img src="../src/assets/img/about-hero.svg" alt="About Hero"/>
                </div>
            </div>
        </div>
    </section>

    <section className="container py-5">
        <div className="row text-center pt-5 pb-3">
            <div className="col-lg-6 m-auto">
                <div className="row">
                    <h2 className="h2"><b className="title-left">Our Services</b></h2>
                </div>
                <hr></hr>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                    sed do eiusmod Lorem ipsum dolor sit amet.
                </p>
            </div>
        </div>
        <div className="row">

            <div className="col-md-6 col-lg-3 pb-5">
                <div className="h-100 py-5 services-icon-wap shadow">
                    <div className="h1 text-success text-center"><i className="fa fa-truck fa-lg"></i></div>
                    <h2 className="h5 mt-4 text-center">Delivery Services</h2>
                </div>
            </div>

            <div className="col-md-6 col-lg-3 pb-5">
                <div className="h-100 py-5 services-icon-wap shadow">
                    <div className="h1 text-success text-center"><i className="fas fa-exchange-alt"></i></div>
                    <h2 className="h5 mt-4 text-center">Shipping & Return</h2>
                </div>
            </div>

            <div className="col-md-6 col-lg-3 pb-5">
                <div className="h-100 py-5 services-icon-wap shadow">
                    <div className="h1 text-success text-center"><i className="fa fa-percent"></i></div>
                    <h2 className="h5 mt-4 text-center">Promotion</h2>
                </div>
            </div>

            <div className="col-md-6 col-lg-3 pb-5">
                <div className="h-100 py-5 services-icon-wap shadow">
                    <div className="h1 text-success text-center"><i className="fa fa-user"></i></div>
                    <h2 className="h5 mt-4 text-center">24 Hours Service</h2>
                </div>
            </div>
        </div>
    </section>
    <Footer></Footer>
    </>
  );
};

export default AboutUs