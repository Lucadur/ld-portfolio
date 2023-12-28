import React, { useState } from 'react';
import { Offcanvas, Carousel } from 'react-bootstrap';
import "../styles/ProjectCard.scss"

const ProjectCard = ({ title, description, imageUrl, projectUrl, additionalImages }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="card" onClick={handleShow} style={{ cursor: 'pointer' }}>
                <img src={imageUrl} alt={title} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Voir le Projet</a>
                </div>
            </div>

            <Offcanvas show={show} onHide={handleClose} style={{ width: '100vw', height: '100vh' }}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{title}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Carousel>
                        {additionalImages.map((image, index) => (
                            <Carousel.Item key={index}>
                                <img className="d-block w-100" src={image} alt={`Slide ${index}`} />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default ProjectCard;
