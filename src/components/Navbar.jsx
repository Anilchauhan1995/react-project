import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../assets/images/logo.png"
const navbar =() => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="tranparent" variant="dark">
      <Container>
        <Navbar.Brand href="home"> <img src={Logo} alt="logo.png" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
          <Nav className="navbar_list align-items-center">
            <Nav.Link href="Home" className="active_page">Home</Nav.Link>
            <Nav.Link href="Services">Services</Nav.Link>
            <Nav.Link href="Pricing">Pricing</Nav.Link>
            <Nav.Link href="About-Us">About Us</Nav.Link>
            <Nav.Link href="#" className="btn btn-theme_btn">Start a Company</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;