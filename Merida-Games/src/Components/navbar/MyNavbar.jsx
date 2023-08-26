import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from 'react-bootstrap';





function MyNavbar() {
  return (
    <>

    <Navbar style={{borderRadius:"0.625rem", border:"2px solid #d63384", width:"100vw"}} bg='secondary' variant='dark' expand="lg">
      <Container>
        <Navbar.Brand href="http://localhost:5173/">Mérida Games</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="http://localhost:5173/">Home</Nav.Link>
          <Nav.Link href="http://localhost:5173/gallery">Games</Nav.Link>
          <Nav.Link href="http://localhost:5173/uploadImage">Contact</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  );
}

export default MyNavbar