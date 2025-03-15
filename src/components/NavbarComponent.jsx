import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../assets/logo.png'

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          SocialConnect
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link 
              href="#"
              active={true}
            >Posts</Nav.Link>
            <Nav.Link href="#">Friend requests</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#">
              <img 
                src='https://reqres.in/img/faces/2-image.jpg'
                alt='avatar'
                width="30"
                height="30"
                className="me-1"
                style={{ borderRadius: '50%' }}
              />
              Profile
            </Nav.Link>
            <Nav.Link href="#">Settings</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;