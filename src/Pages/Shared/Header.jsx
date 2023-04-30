import React from 'react';
import logo from '../../../public/assets/logo.png'
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container>
            <div className='d-flex flex-column  justify-content-center align-items-center text-center my-4'>
                <img src={logo} alt="Logo" className='w-50' />
                <p className='my-2 text-black-50'>Journalism Without Fear or Favour</p>
                <p className='fw-semibold'>{moment().format("dddd,")} <span className='text-black-50'>{moment().format("MMMM D, YYYY")}</span></p>
            </div>
            <div className='d-flex p-3 bg-danger bg-opacity-10 rounded-1'>
                <Button className='btn-danger px-4 py-2 rounded-0 fw-bold fs-5'>Latest</Button>
                <Marquee gradient={true} gradientWidth={150} gradientColor={[255, 255, 255]} speed={100} pauseOnClick={true} className='fs-5 fw-bold text-danger'>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>
        </Container>
    );
};

export default Header;