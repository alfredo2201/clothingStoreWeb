import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
const dataCarrusel = [
    {
        id: "0",
        title: "Fashion Sale",
        subtitle: "Style and comfort",
        description: "Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum. Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum. ",
        image: "../src/assets/img/banner_img_01.jpg",
    },
    {
        id: "1",
        title: "Fashion Sale",
        subtitle: "Style and comfort",
        description: "Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum. Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum. ",
        image: "../src/assets/img/banner_img_02.jpg",
    },
    {
        id: "2",
        title: "Fashion Sale",
        subtitle: "Style and comfort",
        description: "Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum. Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum. ",
        image: "../src/assets/img/banner_img_03.jpg",
    }
]

const Carrusel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div id="template-mo-zay-hero-carousel" data-bs-ride="carousel" onChange={handleSelect}>
            <Carousel activeIndex={index} onSelect={handleSelect} className="p-2 h-100">
                {dataCarrusel.map((item) =>
                    <Carousel.Item key={item.id} className="p-3">
                        <div className="d-flex">
                            <div className="row p-5">
                                <div className="mx-auto col-md-8 col-lg-6">
                                    <img
                                        className="img-fluid"
                                        src={item.image}
                                        alt="First slide"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6  d-flex align-items-center">
                                <div className="text-center">
                                    <h3 className="h3 text-success">{item.title} </h3>
                                    <h1 className="h1">{item.subtitle}</h1>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                )
                }
            </Carousel >
        </div >
    );
}

export default Carrusel