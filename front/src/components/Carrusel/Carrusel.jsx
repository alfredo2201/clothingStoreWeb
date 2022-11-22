import React from "react";

const Carrusel = () => {
    return (   
        // <!-- Start Banner Hero -->
        <div id="template-mo-zay-hero-carousel" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="0" className="active"></li>
                <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="1"></li>
                <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="container">
                        <div className="row p-5">
                            <div className="mx-auto col-md-8 col-lg-6">
                                <img className="img-fluid" src="../src/assets/img/banner_img_01.jpg" alt=""/>
                            </div>
                            <div className="col-lg-6 mb-0 d-flex align-items-center">
                                <div className="text-center">
                                    <h3 className="h3 text-success"><b>Fashion Sale</b></h3>
                                    <h1 className="h1"><b>Style and comfort</b></h1>
                                    <p>
                                        Consectetur adipisicing elit. Laborum fuga incidunt 
                                        laboriosam voluptas iure, delectus dignissimos facilis 
                                        neque nulla earum. 
                                        Consectetur adipisicing elit. Laborum fuga incidunt 
                                        laboriosam voluptas iure, delectus dignissimos facilis 
                                        neque nulla earum. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="container">
                        <div className="row p-5">
                            <div className="mx-auto col-md-8 col-lg-6">
                                <img className="img-fluid" src="../src/assets/img/banner_img_01.jpg" alt=""/>
                            </div>
                            <div className="col-lg-6 mb-0 d-flex align-items-center">
                                <div className="text-center">
                                    <h3 className="h3 text-success"><b>Fashion Sale</b></h3>
                                    <h1 className="h1"><b>Style and comfort</b></h1>
                                    <p>
                                        Consectetur adipisicing elit. Laborum fuga incidunt 
                                        laboriosam voluptas iure, delectus dignissimos facilis 
                                        neque nulla earum. 
                                        Consectetur adipisicing elit. Laborum fuga incidunt 
                                        laboriosam voluptas iure, delectus dignissimos facilis 
                                        neque nulla earum. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="container">
                        <div className="row p-5">
                            <div className="mx-auto col-md-8 col-lg-6">
                                <img className="img-fluid" src="../src/assets/img/banner_img_01.jpg" alt=""/>
                            </div>
                            <div className="col-lg-6 mb-0 d-flex align-items-center">
                                <div className="text-center">
                                    <h3 className="h3 text-success"><b>Fashion Sale</b></h3>
                                    <h1 className="h1"><b>Style and comfort</b></h1>
                                    <p>
                                        Consectetur adipisicing elit. Laborum fuga incidunt 
                                        laboriosam voluptas iure, delectus dignissimos facilis 
                                        neque nulla earum. 
                                        Consectetur adipisicing elit. Laborum fuga incidunt 
                                        laboriosam voluptas iure, delectus dignissimos facilis 
                                        neque nulla earum. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="prev">
                <i className="fas fa-chevron-left"></i>
            </a>
            <a className="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="next">
                <i className="fas fa-chevron-right"></i>
            </a>
        </div>
        )
}

export default Carrusel