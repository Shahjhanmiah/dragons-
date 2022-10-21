import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import LeftSideNav from '../../LeftsideNav/LeftSideNav';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';


const Header = () => {
    const {user,logOut} = useContext(AuthContext);
    const handleLoOut = () =>{
        logOut()
        .then(()=>{})
        .catch(error=>console.error(error))
    }
    return (
        <div>
            <Navbar className='mb-4' collapseOnSelect expand="lg" bg="ligth" variant="ligth">
                <Container>
                    <Navbar.Brand ><Link to ='/'>Dragon News</Link></Navbar.Brand>
                 
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">All news</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">
                                {
                                    user?.uid ?
                                   <>
                                    <span>{user?.displayName}</span>
                                    <Button  variant="light"
                                    onClick={handleLoOut}>log out</Button>
                                   </>
                                    :
                                    <>
                                    <Link to='/login'>login</Link>
                                    <Link to='/register'>Register</Link>
                                    </>

                                }
                                </Nav.Link>
                            <Link  to="/profile">
                            {user?.photoURL ?
                            <Image style={{height:'45px'}} roundedCircle src ={user?.photoURL}></Image>
                            :<FaUser></FaUser>
                            }
                            </Link>
                        </Nav>
                        <div className='d-lg-none'>
                           <LeftSideNav></LeftSideNav> 
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;