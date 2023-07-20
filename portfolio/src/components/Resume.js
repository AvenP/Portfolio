import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../style/Resume.css";
import PDF from "../documentation/AvenPearsonResume.pdf";

function Resume() {
    return (
      <section id="resume" className="resume-margin">
        <Container className="resume-section">
          <Row>
            <Col className="text-center">
              <h1>Resume</h1>
              <hr className="star-primary" />
              <Button variant="dark" href={PDF} download>
                Download Resume
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
            <h3>Technical Skills</h3>
            <hr className="star-secondary" />
            <ul className="list-inline">
              <li className="list-inline-item">
                <strong>Languages:</strong> JavaScript, HTML, CSS
              </li>
              <li className="list-inline-item">
                <strong>Libraries/Frameworks:</strong> React, jQuery, Bootstrap,
              </li>
              <li className="list-inline-item">
                <strong>Databases:</strong> MongoDB, MySQL
              </li>
              <li className="list-inline-item">
                <strong>Tools/Platforms:</strong> Git, GitHub, Heroku
              </li>
            </ul>
          </Col>
          <Col>
            <h3>Proficiencies</h3>
            <ul>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>
                <span className="teal-color">M</span>
                MongoDB
              </li>
              <li>
                <span className="teal-color">E</span>Express
              </li>
              <li>
                <span className="teal-color">R</span>React
              </li>
              <li>
                <span className="teal-color">N</span>Node.js
              </li>
              <li>SQL</li>
            </ul>
          </Col>
        </Row>
        </Container>
    </section>
      );
    }
    // Export Resume
    export default Resume;