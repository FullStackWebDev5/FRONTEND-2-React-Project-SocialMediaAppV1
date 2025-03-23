import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../assets/logo.png'
import { Link, useLocation } from 'react-router-dom'

function NavbarComponent() {
  const location = useLocation()

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand 
          as={Link}
          to='/'
        >
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
              as={Link}
              to='/'
              active={location.pathname == '/'}
            >Posts</Nav.Link>
            <Nav.Link 
              as={Link}
              to='/friend-requests'
              active={location.pathname == '/friend-requests'}
            >Friend requests</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              as={Link}
              to='/profile'
              active={location.pathname == '/profile'}
            >
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
            <Nav.Link
              as={Link}
              to='settings'
              active={location.pathname == '/settings'}
            >Settings</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;