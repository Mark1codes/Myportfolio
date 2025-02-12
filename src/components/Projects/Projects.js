import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import farmvest from "../../Assets/Projects/farmvest.png";
import web from "../../Assets/Projects/web.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={farmvest}
              isBlog={false}
              title="FarmVest"
              description="An e-commerce platform for farmers to sell their products directly to the buyer without middleman, with an AI chatbot that will assist both users. Build with React Native framework and Firebase."
              ghLink="https://github.com/Mark1codes/FarmVest1"
          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={web}
              isBlog={false}
              title="FarmVest-Web"
              description="FarmVest-Web build with React.js and Firebase, verifies the legitimacy of crop sellers account, ensuring a secure and trustworthy marketplace for buyers."
              ghLink="https://github.com/Mark1codes/farmvest.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
