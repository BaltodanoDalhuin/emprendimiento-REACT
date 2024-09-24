import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/CardHome.css';

import colleciones1 from '../assets/colleciones1.jpg';
import colleciones2 from '../assets/colleciones2.jpg';
import colleciones3 from '../assets/colleciones3.jpg';
import colleciones4 from '../assets/colleciones4.jpg';
import colleciones5 from '../assets/colleciones5.jpg';
import colleciones6 from '../assets/colleciones6.jpg';
import colleciones7 from '../assets/colleciones7.jpg';
import colleciones8 from '../assets/colleciones8.jpg';
import colleciones9 from '../assets/colleciones9.jpg';


const ColecionesForm = () => {
    const dishes = [
        {
            title: "Colecion 1",
            description: "Taza de Personalizada",
            category: "Categoria: Personalizada",
            imgSrc: colleciones1
        },
        {
            title: "Colecion 2",
            description: "Camisas Personalizadas",
            category: "Categoria: Personalizada",
            imgSrc: colleciones2
        },
        {
            title: "Colecion 3",
            description: "Scrunchies diferetes colores",
            category: "Categoria: Personalizada",
            imgSrc: colleciones3
        },
        {
            title: "Colecion 4",
            description: "Taza de Personalizada",
            category: "Categoria: Personalizada",
            imgSrc: colleciones4
        },
        {
            title: "Colecion 5",
            description: "Vasos Termicos Personalizados",
            category: "Categoria: Personalizada",
            imgSrc: colleciones5
        },
        {
            title: "Colecion 6",
            description: "Lapicero y Llavero",
            category: "Categoria: Personalizada",
            imgSrc: colleciones6
        },
        {
            title: "Colecion 7",
            description: "Caja de Flores tejidas",
            category: "Categoria: Personalizada",
            imgSrc: colleciones7
        },
        {
            title: "Colecion 8",
            description: "Tazas Personalizadas",
            category: "Categoria: Personalizada",
            imgSrc: colleciones8
        },
        {
            title: "Colecion 9",
            description: "Tazas Personalizadas",
            category: "Categoria: Personalizada",
            imgSrc: colleciones9
        }
    ];

    return (
        <div>
            <div>
                <br />
                <br />
            </div>
            <h1 id="title-p" className="text-center mb-4 title-text">Conoce nuestras Coleciones</h1>
            <Row className="justify-content-center">
                {dishes.map((dish, index) => (
                    <Col xs={12} md={6} lg={4} key={index} className="mb-4">
                        <Card className="shadow hover-card">
                            <Card.Body className="d-flex justify-content-between align-items-center">
                                <div>
                                    <Card.Title className="title-text">{dish.title}</Card.Title>
                                    <Card.Text className="description-text">{dish.description}</Card.Text>
                                    <Card.Text className="description-text">{dish.category}</Card.Text>
                                </div>
                                <Card.Img variant="top" src={dish.imgSrc} style={{ width: '100px', height: '100px' }} />
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default ColecionesForm;