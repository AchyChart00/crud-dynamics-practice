import React from "react";

import { NavLink, Link } from "react-router-dom";

import { Container, Navbar, Nav} from "react-bootstrap";

import { SiDynamics365 } from "react-icons/si";
import {
  BiHomeAlt,
  BiAddToQueue,
  BiEdit
} from "react-icons/bi";
import {MdDeleteOutline} from "react-icons/md"


export const Navigationbar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand >
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
              <Nav.Link>
                <NavLink
                  className={({ isActive }) =>
                    "nav-item nav-link " + (isActive ? "active" : "")
                  }
                  to="/home"
                >
                  <span>
                    <BiHomeAlt />
                  </span>{" "}
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  className={({ isActive }) =>
                    "nav-item nav-link " + (isActive ? "active" : "")
                  }
                  to="/add"
                >
                  <span>
                    <BiAddToQueue />
                  </span>{" "}
                  Añadir
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  className={({ isActive }) =>
                    "nav-item nav-link " + (isActive ? "active" : "")
                  }
                  to="/edit"
                >
                  <span>
                    <BiEdit />
                  </span>{" "}
                  Editar
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  className={({ isActive }) =>
                    "nav-item nav-link " + (isActive ? "active" : "")
                  }
                  to="/delete"
                >
                  <span>
                    <MdDeleteOutline />
                  </span>{" "}
                  Eliminar
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
