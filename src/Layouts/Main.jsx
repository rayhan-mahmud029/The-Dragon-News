import React from 'react';
import Header from '../Pages/Shared/Header';
import Footer from '../Pages/Shared/Footer';
import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Navbar from '../Pages/Shared/Navbar';
import LeftNav from '../Pages/Shared/LeftNav';
import RightNav from '../Pages/Shared/RightNav';

const Main = () => {
    return (
        <div>
            <Header />
            <Navbar/>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav/>
                    </Col>

                    <Col lg={6}>
                        <Outlet/>
                    </Col>

                    <Col lg={3}>
                        <RightNav/>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Main;