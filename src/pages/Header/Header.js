import React from "react";
import "./header.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="container-fluid">
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <NavLink to="/" className="header-text-deco">
              <Navbar.Brand href="#" className="nav-sec">
                <h1>
                  <span className="logo">
                    <img className="logo-img" src="/images/logo.png" alt="1" />
                  </span>
                  मधुरदर्शन
                </h1>
                <strong className="tag-line">
                  Luxury is not a place, its an Experience....
                </strong>
              </Navbar.Brand>
            </NavLink>

            <Navbar.Toggle aria-controls="navbarScroll" className="fg" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto  my-lg-0 text-center "
                style={{ maxheight: "100px" }}
                navbarScroll
              >
                <Nav.Link className="nav-links">
                  <Link className="link-tag" to="/">
                    Home
                  </Link>
                </Nav.Link>

                <Nav.Link className="nav-links">
                  <Link className="link-tag" to="/about">
                    About
                  </Link>
                </Nav.Link>

                <Nav.Link className="nav-links">
                  <Link className="link-tag" to="/rooms">
                    Rooms
                  </Link>
                </Nav.Link>

                <Nav.Link className="nav-links">
                  <Link className="link-tag" to="/contact">
                    Contact
                  </Link>
                </Nav.Link>

                <Link to="/contact">
                  <Button className="header-btn-book" variant="info">
                    Book Your Stay
                  </Button>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <br />
    </div>
  );
}

export default Header;
