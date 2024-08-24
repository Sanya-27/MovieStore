import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbarr.css";
import { Link, useLocation } from "react-router-dom";
import { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";
import { useNavigate } from "react-router-dom";
function Navbarr({ type, settype }) {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const search = useRef();

  function handlesearch() {
    {
      search.current.value.length > 0 &&
        navigate(`/search/?query=${search.current.value}`);
    }
  }

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary nav">
        <Container>
          <Navbar.Brand as={Link} to="/MovieStore">
            <span className="brand">
              {" "}
              <strong>Movie Store</strong>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                as={Link}
                to="/MovieStore/Movie"
                className="Movie"
                id={location === "/MovieStore/Movie" ? `set-active` : ""}
              >
                <span>Movie</span>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/MovieStore/TV"
                className="TV"
                id={location === "/MovieStore/TV" ? `set-active` : ""}
              >
                <span>TV Shows</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>

        <div className="form"></div>
        <Form
          inline="true"
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            handlesearch();
          }}
        >
          <Form.Control
            type="text"
            placeholder="Enter here"
            className=" mr-sm-2"
            ref={search}
          />
          <Button
            type={"submit"}
            style={{ backgroundColor: "#ff4b5c", border: "none" }}
          >
            Search
          </Button>
        </Form>
      </Navbar>
    </>
  );
}

export default Navbarr;
