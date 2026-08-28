import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import './Gallery.css';

function Gallery() {
    return (
        <div className="gallery-container">
            <Container>
                {/* Section 1 */}
                <section className="gallery-section">
                    <h3 className="text-center my-3">Our New Collection</h3>
                    <Row>
                        <Col xs={12} md={4}>
                            <Card>
                                <Image src="images/11.jpg" thumbnail className="gallery-image" />
                                <Card.Body>
                                    <Card.Text className="text-center">This image is part of our new collection.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={4}>
                            <Card>
                                <Image src="images/13.jpg" thumbnail className="gallery-image" />
                                <Card.Body>
                                    <Card.Text className="text-center">Take a look at our creative process.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={4}>
                            <Card>
                                <Image src="images/14.jpg" thumbnail className="gallery-image" />
                                <Card.Body>
                                    <Card.Text className="text-center">A glimpse of our beautiful art collection.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </section>

                {/* Section 2 */}
                <section className="gallery-section">
                    <h3 className="text-center my-3">Creative Works</h3>
                    <Row>
                        <Col xs={12} md={4}>
                            <Card>
                                <Image src="images/20.jpg" thumbnail className="gallery-image" />
                                <Card.Body>
                                    <Card.Text className="text-center">This image is part of our new collection.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={4}>
                            <Card>
                                <Image src="images/19.jpg" thumbnail className="gallery-image" />
                                <Card.Body>
                                    <Card.Text className="text-center">Take a look at our creative process.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={4}>
                            <Card>
                                <Image src="images/21.jpg" thumbnail className="gallery-image" />
                                <Card.Body>
                                    <Card.Text className="text-center">A glimpse of our beautiful art collection.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </section>
            </Container>
        </div>
    );
}

export default Gallery;
