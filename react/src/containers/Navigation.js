import  React , { useState } from 'react';
import { Navbar , Nav   } from 'react-bootstrap';
import logo from '../logo-1.png'
import logo2 from '../logo-2.png'
function Navigation(props) {
  const [themereload, setThemeReload] = useState(true);	
  return (
	<Navbar id="navigation-section" bg="dark" variant="dark" expand="lg">
	  <Navbar.Brand className="ml-4" href="navigation-section">
		  <div className={themereload ? "filling-logo wave" :"hidden" } onAnimationEnd={()=> {props.themeChange();setThemeReload(false)}}><img src={logo} width="60" height="50" className="nav-logo d-inline-block align-top" alt="logo" /></div>
		  <div className={themereload ? "hidden" :"filling-logo-2 wave" } onAnimationEnd={()=> {props.themeChange();setThemeReload(true)}}><img src={logo2} width="60" height="50" className="nav-logo d-inline-block align-top" alt="logo" /></div>
	  </Navbar.Brand>
	  <Navbar.Toggle aria-controls="basic-navbar-nav" />
	  <Navbar.Collapse id="basic-navbar-nav">
	    <Nav className="ml-auto mr-4">
	      <Nav.Link href="#about-section">About</Nav.Link>
	      <Nav.Link href="#projects-section">Projects</Nav.Link>
	      <Nav.Link href="#contact-section">Contact Me</Nav.Link>
	    </Nav>
	  </Navbar.Collapse>
	</Navbar>  	
  );
}

export default Navigation;
