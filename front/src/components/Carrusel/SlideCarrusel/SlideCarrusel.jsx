import React from 'react';

const SlideCarrusel = (props) => {
    return (
        <div className="carousel-item">
            <div className="container">
                <div className="row p-5">
                    <div className="mx-auto col-md-8 col-lg-6">
                        <img className="img-fluid" src="../src/assets/img/banner_img_01.jpg" alt="" />
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
    )
}

export default SlideCarrusel;