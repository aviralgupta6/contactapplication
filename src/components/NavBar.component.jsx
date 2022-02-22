import { Nav, Navbar, Container } from "react-bootstrap";
import React from "react";
import PropTypes from "prop-types";

function NaviBar(props) {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Contact</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Homepage</Nav.Link>
            <Nav.Link href="add-contact">Add Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NaviBar;
