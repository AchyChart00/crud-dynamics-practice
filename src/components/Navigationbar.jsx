import React from "react";

import { NavLink, Link } from "react-router-dom";

import { Container, Navbar, Nav } from "react-bootstrap";

import { SiDynamics365 } from "react-icons/si";
import { FcHome, FcAddDatabase } from "react-icons/fc";

export const Navigationbar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
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
              <NavLink
                className={({ isActive }) =>
                  "nav-item nav-link " + (isActive ? "active" : "")
                }
                to="/home"
              >
                <span>
                  <FcHome />
                </span>{" "}
                Home
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  "nav-item nav-link " + (isActive ? "active" : "")
                }
                to="/add"
              >
                <span>
                  <FcAddDatabase />
                </span>{" "}
                Añadir
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
