import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import { ProductProvider } from '../../context/Productcontext';
import logo from '../../logo.svg';

const Dashboard = () => {



    return (
        <div>
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src={logo}// para referenciar el import del logo
                                width="35"
                                height="35"
                                className="d-inline-block align-top"
                            />{' '}
                            React web32
                        </Navbar.Brand>
                        {/* Opciones*/}
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/' href="#home">Home</Nav.Link>
                            <Nav.Link as={Link} to='/catalogue' href="#catalogue">Catalogue</Nav.Link>

                        </Nav>
                    </Container>
                </Navbar>
                {/* Aquí se mostrarán los componentes al navegar por las opciones del navbar*/}
                <ProductProvider>
                    <Outlet />{/*acá se pintan las rutas */}
                </ProductProvider>

            </>
        </div>
    )
}

export default Dashboard
