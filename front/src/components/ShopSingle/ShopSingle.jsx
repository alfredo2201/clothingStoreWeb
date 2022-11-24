import React, { useState } from "react";

const SingleShop = () =>{
    return (
    <section className="bg-light">
    <div className="container pb-5">
        <div className="row">
            <div className="col-lg-5 mt-5">
                <div className="card mb-3">
                    <img className="card-img img-fluid" src="./src/assets/img/product_single_10.jpg" alt="Card image cap" id="product-detail"/>
                </div>
                <div className="row">
                    {/* <!--Start Controls--> */}
                    <div className="col-1 align-self-center">
                        <a href="#multi-item-example" role="button" data-bs-slide="prev">
                            <i className="text-dark fas fa-chevron-left"></i>
                            <span className="sr-only">Previous</span>
                        </a>
                    </div>
                    {/* <!--End Controls-->
                    <!--Start Carousel Wrapper--> */}
                    <div id="multi-item-example" className="col-10 carousel slide carousel-multi-item" data-bs-ride="carousel">
                        {/* <!--Start Slides--> */}
                        <div className="carousel-inner product-links-wap" role="listbox">

                            {/* <!--First slide--> */}
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-4">
                                        <a href="#">
                                            <img className="card-img img-fluid" src="./src/assets/img/product_single_01.jpg" alt="Product Image 1"/>
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a href="#">
                                            <img className="card-img img-fluid" src="./src/assets/img/product_single_02.jpg" alt="Product Image 2"/>
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a href="#">
                                            <img className="card-img img-fluid" src="./src/assets/img/product_single_03.jpg" alt="Product Image 3"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <!--/.First slide-->

                            <!--Second slide--> */}
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-4">
                                        <a href="#">
                                            <img className="card-img img-fluid" src="./src/assets/img/product_single_04.jpg" alt="Product Image 4"/>
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a href="#">
                                            <img className="card-img img-fluid" src="./src/assets/img/product_single_05.jpg" alt="Product Image 5"/>
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a href="#">
                                            <img className="card-img img-fluid" src="./src/assets/img/product_single_06.jpg" alt="Product Image 6"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <!--/.Second slide-->

                            <!--Third slide--> */}
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-4">
                                        <a href="#">
                                            <img className="card-img img-fluid" src="./src/assets/img/product_single_07.jpg" alt="Product Image 7"/>
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a href="#">
                                            <img className="card-img img-fluid" src="./src/assets/img/product_single_08.jpg" alt="Product Image 8"/>
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a href="#">
                                            <img className="card-img img-fluid" src="./src/assets/img/product_single_09.jpg" alt="Product Image 9"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <!--/.Third slide--> */}
                        </div>
                        {/* <!--End Slides--> */}
                    </div>
                    {/* <!--End Carousel Wrapper-->
                    <!--Start Controls--> */}
                    <div className="col-1 align-self-center">
                        <a href="#multi-item-example" role="button" data-bs-slide="next">
                            <i className="text-dark fas fa-chevron-right"></i>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    {/* <!--End Controls--> */}
                </div>
            </div>
            {/* <!-- col end --> */}
            <div className="col-lg-7 mt-5">
                <div className="card">
                    <div className="card-body">
                        <h1 className="h2">Active Wear</h1>
                        <p className="h3 py-2">$25.00</p>
                        <h6>Description:</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse. Donec condimentum elementum convallis. Nunc sed orci a diam ultrices aliquet interdum quis nulla.</p>
                        <form action="" method="GET">
                            <input type="hidden" name="product-title" value="Activewear"/>
                            <div className="row">
                                <div className="col-auto">
                                    <ul className="list-inline pb-3">
                                        <li className="list-inline-item">Size :
                                            <input type="hidden" name="product-size" id="product-size" value="S"/>
                                        </li>
                                        <li className="list-inline-item"><span className="btn btn-success btn-size">S</span></li>
                                        <li className="list-inline-item"><span className="btn btn-success btn-size">M</span></li>
                                        <li className="list-inline-item"><span className="btn btn-success btn-size">L</span></li>
                                        <li className="list-inline-item"><span className="btn btn-success btn-size">XL</span></li>
                                    </ul>
                                </div>
                                <div className="col-auto">
                                    <ul className="list-inline pb-3">
                                        <li className="list-inline-item text-right">
                                            Quantity
                                            <input type="hidden" name="product-quanity" id="product-quanity" value="1"/>
                                        </li>
                                        <li className="list-inline-item"><span className="btn btn-success" id="btn-minus">-</span></li>
                                        <li className="list-inline-item"><span className="badge bg-secondary" id="var-value">1</span></li>
                                        <li className="list-inline-item"><span className="btn btn-success" id="btn-plus">+</span></li>
                                    </ul>
                                </div>
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
