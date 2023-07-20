import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import avatar from "../images/picpro.jpg";
import "../style/About.css";

function About() {
    return (
        <section id="about" className="py-5">
      <h1 className="about-heading">About Me</h1>
      <Container>
        <Row>
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center align-items-center mb-4 mb-md-0"
          >
            <Image src={avatar} rounded fluid className="about-image" />
          </Col>
          <Col xs={12} md={8}>
            <Card>
              <Card.Body>
                {/* <Card.Title className="text-center mb-4">
                  
                </Card.Title> */}
                <Card.Text>
                Over ten years working in youth sports I have always had a passion to learn the computer side of the field.
                I was given the opportunity to learn how to run season building and player registration applications.
                After some time I became the go-to person to complete the app side of registration for multiple locations.
                With my work history and my interest in programming I have decided to make a career change.
                I am excited to learn and grow in the field!
                </Card.Text>
                </Card.Body>
                </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
  }

  export default About;