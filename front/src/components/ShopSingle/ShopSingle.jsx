import React, { useState } from "react";
import AddQuantity from "./AddQuantity/AddQuantity";
import SelectSize from "./SelectSize/SelectSize";
import PhotoCarousel from "./PhotoCarousel/PhotoCarousel";

const SingleShop = () => {
    return (
        <section className="bg-light">
            <div className="container pb-5">
                <div className="row">
                    <div className="col-lg-5 mt-5">
                        <div className="card mb-3">
                            <img className="card-img img-fluid" src="./src/assets/img/product_single_10.jpg" alt="Card image cap" id="product-detail" />
                        </div>
                        <div className="row">
                            <div className="col-1 align-self-center">
                                <a href="#multi-item-example" role="button" data-bs-slide="prev">
                                    <i className="text-dark fas fa-chevron-left"></i>
                                    <span className="sr-only">Previous</span>
                                </a>
                            </div>
                            <div id="multi-item-example" className="col-10 carousel slide carousel-multi-item" data-bs-ride="carousel">
                                <div className="carousel-inner product-links-wap" role="listbox">
                                    <PhotoCarousel></PhotoCarousel>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 mt-5">
                        <div className="card">
                            <div className="card-body">
                                <h1 className="h2">Active Wear</h1>
                                <p className="h3 py-2">$25.00</p>
                                {/* <h6>Description:</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse. Donec condimentum elementum convallis. Nunc sed orci a diam ultrices aliquet interdum quis nulla.</p> */}
                                <form action="" method="GET">
                                    <input type="hidden" name="product-title" value="Activewear" />
                                    <div className="row">
                                        <SelectSize></SelectSize>
                                        <AddQuantity></AddQuantity>
                                    </div>

                                    <div className="row pb-3">
                                        <div className="col d-grid">
                                            <button type="submit" className="btn btn-success btn-lg" name="submit" value="addtocard">Add To Cart</button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SingleShop
