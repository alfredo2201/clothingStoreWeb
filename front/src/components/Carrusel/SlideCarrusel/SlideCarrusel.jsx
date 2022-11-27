import React from 'react';

const SlideCarrusel = (props) => {
    const { title, subtitle, text, imageSrc } = props;
    return (
        <div className="carousel-item">
            <div className="container">
                <div className="row p-5">
                    <div className="mx-auto col-md-8 col-lg-6">
                        <img className="img-fluid" src={imageSrc} alt="" />
                    </div>
                    <div className="col-lg-6 mb-0 d-flex align-items-center">
                        <div className="text-center">
                            <h3 className="h3 text-success"><b>{title}</b></h3>
                            <h1 className="h1"><b>{subtitle}</b></h1>
                            <p>{text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlideCarrusel;