import React from "react";
import { Card, Button } from "react-bootstrap";

function ProjectCard({ project }) {
  return (
    <Card>
      <Card.Img variant="top" src={project.image} />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
        <Button variant="primary" href={project.link}>
          View Project
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
