import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from 'react-bootstrap';





function MyNavbar() {
  return (
    <>

    <Navbar style={{borderRadius:"0.625rem", border:"2px solid #d63384", width:"100vw"}} bg='secondary' expand="lg">
      <Container>
        <Navbar.Brand style={{color:"white"}} href="http://localhost:5174//">Mérida Games</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link style={{color:"white"}} href="http://localhost:5174//">Home</Nav.Link>
          <Nav.Link  style={{color:"white"}} href="http://localhost:5174/games">Games</Nav.Link>
          <Nav.Link style={{color:"white"}} href="http://localhost:5174/contact">Contact</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  );
}

export default MyNavbar