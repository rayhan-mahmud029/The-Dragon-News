import React from 'react';
import Header from '../Pages/Shared/Header';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import RightNav from '../Pages/Shared/RightNav';
import Navbar from '../Pages/Shared/Navbar';

const NewsDisplay = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <Container>
                <Row>
                    <Col lg={9}>
                        <Outlet />
                    </Col>

                    <Col lg={3}>
                        <RightNav />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default NewsDisplay;