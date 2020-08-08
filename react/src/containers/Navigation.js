import  React from 'react';
import { Navbar , Nav   } from 'react-bootstrap';
import logo from '../logo.png'
function Navigation() {
  return (
	<Navbar bg="dark" variant="dark" expand="lg">
	  <Navbar.Brand className="ml-4" href="#"><img src={logo} width="60" height="50" className="d-inline-block align-top" alt="logo" /></Navbar.Brand>
	  <Navbar.Toggle aria-controls="basic-navbar-nav" />
	  <Navbar.Collapse id="basic-navbar-nav">
	    <Nav className="ml-auto mr-4">
	      <Nav.Link href="">Experinces</Nav.Link>
	      <Nav.Link href="">Projects</Nav.Link>
	      <Nav.Link href="">Contact Me</Nav.Link>
	    </Nav>
	  </Navbar.Collapse>
	</Navbar>  	
  );
}

export default Navigation;
