import { useState } from 'react';
import {Carousel} from 'react-bootstrap';
import img1 from "../assets/colleciones1.jpg"
import img2 from "../assets/colleciones2.jpg"
import img3 from "../assets/colleciones3.jpg"
import '../styles/CarrucelStyles.css'


function CarruselForm() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            className="custom_carousel"
        >
            <Carousel.Item>
                <img className="d-block w-100" src={img1} alt="Mitad" />
                <Carousel.Caption>
                    <h3>Coleciones</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt=""
                />
                <Carousel.Caption>
                    <h3>Coleciones</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img3}
                    alt=""
                />
                <Carousel.Caption>
                    <h3>Coleciones</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
}


export default CarruselForm;