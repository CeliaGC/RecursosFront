import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// Creamos un navbar y pasamos unas props para renderizar un contenido distinto y un enlace distinto en los botones del navbar
// según en la vista donde importemos el componente

function MyNavbar({ leftButton, leftButtonClick, rightButton, rightButtonClick }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Example Router</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={leftButtonClick}>{leftButton}</Nav.Link>
            <Nav.Link href={rightButtonClick}>{rightButton}</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;