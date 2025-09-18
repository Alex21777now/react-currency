import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>REACT - Currency</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Курсы валют</Nav.Link>
          <Nav.Link as={Link} to="/history">История курса</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
