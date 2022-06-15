import React from "react";

import { NavLink, Link } from "react-router-dom";

import {
  NavbarBrand,
  Container,
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";

import { SiDynamics365 } from "react-icons/si";
import { BiHomeAlt } from "react-icons/bi";

export const Navigationbar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Link className="navbar-brand" to="/">
              <span>
                <SiDynamics365 />
              </span>
              <span>Dynamics</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">
                
                <NavLink
                  className={({ isActive }) =>
                    "nav-item nav-link " + (isActive ? "active" : "")
                  }
                  to="/home"
                >
                  <span>
                  <BiHomeAlt />
                </span> Home
                </NavLink>
              </Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Gifts" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Data</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Create</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
