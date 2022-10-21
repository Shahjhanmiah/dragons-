import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import LeftSideNav from '../LeftsideNav/LeftSideNav';
import RigthSideNav from '../RigthSideNav/RigthSideNav';
import Header from '../Share/Header/Header';

const Main = () => {
    return (
       <div>
        <Header></Header>
         <Container>
            <Row>
                <Col lg='2'className='d-none d-lg-block'>
               <LeftSideNav></LeftSideNav>
                </Col>
                <Col lg='7'>
                <Outlet></Outlet>
                </Col>
                <Col lg='3'>
                    <RigthSideNav></RigthSideNav>
                </Col>
            </Row>
        </Container>
        <Footer></Footer>
       </div>
    );
};

export default Main;