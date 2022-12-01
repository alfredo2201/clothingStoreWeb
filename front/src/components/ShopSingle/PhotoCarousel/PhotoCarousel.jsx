import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';

const dataCarrusel = [
    {
        id: "a1",
        image1: "./src/assets/img/product_single_01.jpg",
        image2: "./src/assets/img/product_single_02.jpg",
        image3: "./src/assets/img/product_single_03.jpg"
    },
    {
        id: "a2",
        image1: "./src/assets/img/product_single_04.jpg",
        image2: "./src/assets/img/product_single_05.jpg",
        image3: "./src/assets/img/product_single_06.jpg"
    },
    {
        id: "a3",
        image1: "./src/assets/img/product_single_07.jpg",
        image2: "./src/assets/img/product_single_08.jpg",
        image3: "./src/assets/img/product_single_09.jpg"
    }
]
const PhotoCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="carousel-inner product-links-wap" role="listbox" onChange={handleSelect}>
            <Carousel activeIndex={index} onSelect={handleSelect} className="p-5 ">
                {dataCarrusel.map((item) =>
                    <Carousel.Item key={item.id}>
                        <div className="row">
                            <div className="col-4">
                                <a href="#">
                                    <img className="card-img img-fluid" src={item.image1} alt="Product Image 1" />
                                </a>
                            </div>
                            <div className="col-4">
                                <a href="#">
                                    <img className="card-img img-fluid" src={item.image2} alt="Product Image 2" />
                                </a>
                            </div>
                            <div className="col-4">
                                <a href="#">
                                    <img className="card-img img-fluid" src={item.image3} alt="Product Image 3" />
                                </a>
                            </div>
                        </div>
                    </Carousel.Item>
                )
                }
            </Carousel >
        </div >
    );
}
export default PhotoCarousel