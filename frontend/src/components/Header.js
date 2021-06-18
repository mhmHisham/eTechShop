import React from 'react'
import { Navbar, Nav , Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <header>
            <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
                <Container>
                    <Link to="/">
                        <Navbar.Brand >TechShop</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Link to="/cart">
                                    <Nav.Link ><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                                </Link>
                                <Link to="/login">
                                    <Nav.Link><i className="fas fa-user"></i>SignIn</Nav.Link>
                                </Link>
                            </Nav>

                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
    
}

export default Header
