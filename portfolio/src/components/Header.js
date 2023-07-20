import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { Container, Row, Col } from "react-bootstrap";
import "../style/Header.css";

function Header() {
    return (
        <>
        <Container fluid className="bg-dark">
          <Row className="justify-content-center text-center mb-0">
            <Col className="pb-0">
            <Link
                to="/portfolio/"
                className="text-white text-decoration-none"
                style={{ margin: "0" }}
                >
                </Link>
                </Col>
        </Row>
      </Container>
      <Navigation />
    </>
  );
}
// Export Header
export default Header;