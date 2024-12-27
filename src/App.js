import React from "react";
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import ProjectCard from "./components/ProjectCard";
import ContactForm from "./components/ContactForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function App() {
  // Sample project data
  const projects = [
    {
      title: "Task Manager App",
      description:
        "A React-based web application that helps users manage their daily tasks. Features include adding, editing, and deleting tasks, setting priorities, and marking tasks as complete.",
      image: "https://cdn.wedevs.com/uploads/2020/06/Task-Manager-App-.png?text=Task+Manager+App",
      link: "#"
    },
    {
      title: "E-commerce Storefront",
      description:
        "An e-commerce platform built using React and Redux. It includes features like product listings, a shopping cart, user authentication, and order history.",
      image: "https://d2dkqamqz2k831.cloudfront.net/posts/401-1733217507464.jpg?text=E-commerce+Store",
      link: "#"
    },
    {
      title: "Movie Finder",
      description:
        "A React application that uses an external API to search for movies. Users can filter by genre, year, and rating. Includes a feature to save favorite movies.",
      image: "	https://mir-s3-cdn-cf.behance.net/project_modules/1400/6d3f54119303043.609ab987298d4.png?text=Movie+Finder",
      link: "#"
    },
    {
      title: "Weather Dashboard",
      description:
        "A simple weather app built with React and OpenWeather API. It shows the current weather, a 7-day forecast, and details like humidity and wind speed.",
      image: "https://s3-alpha.figma.com/hub/file/4090659507/a7a13be5-2145-4d43-8b02-9493915629bd-cover.png?text=Weather+Dashboard",
      link: "#"
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio site created using React. Includes sections for projects, skills, and contact information. Responsive design ensures it looks great on all devices.",
      image: "	https://cdn.cmsfly.com/635bcad9b8a74e0091632998/images/screely-1722494689326-SZBWt.png?text=Portfolio+Website",
      link: "#"
    },
    {
      title: "Recipe Finder",
      description:
        "A React app where users can search for recipes by ingredients. Integrates with an API to fetch recipes and provides detailed instructions for cooking.",
      image: "	https://www.sourcecodester.com/sites/default/files/images/rems/frf1.png?text=Recipe+Finder",
      link: "#"
    },
    {
      title: "Fitness Tracker",
      description:
        "A React-based fitness tracking app that allows users to log their exercises, monitor progress, and set fitness goals. Includes a dashboard with charts and stats.",
      image: "	https://i.pcmag.com/imagery/roundups/0634CGyLGOHgKlIbVidl2zZ-44.fit_lim.size_1050x.png?text=Fitness+Tracker",
      link: "#"
    },
    {
      title: "Chat Application",
      description:
        "A real-time chat app built with React and Firebase. Features include user authentication, public and private chat rooms, and emoji support.",
      image: "	https://miro.medium.com/v2/resize:fit:592/1*AVRAkY0D1kiVc6Ha1e5mSg.jpeg?text=Chat+Application",
      link: "#"
    }
  ];
  

  return (
    <div className="App">
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            {/* <span>My Portfolio</span> */}
            <div className="ms-3 d-flex">
              <a
                href="https://github.com/Gowthamraj2000?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-3"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/gowthamraj-kumaravel-223149218/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-3"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="gowthamraj2392000@gmail.com"
                className="text-white"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact Me</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Main content */}
      <Container style={{ marginTop: "100px" }}>
        <Row className="my-5">
          <Col md={12} className="text-center">
            <h1>Welcome to My Portfolio</h1>
            <img
              src="https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg" // Replace with your image URL
              alt="Profile"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                objectFit: "cover",
                margin: "20px 0"
              }}
            />
            <p>Frontend developer specialized in React</p>
            <p>A few of the projects I have worked on</p>
          </Col>
        </Row>

        {/* Project Cards Section */}
        <Row id="projects" className="mb-5">
          {projects.map((project, index) => (
            <Col md={3} key={index} className="mb-4">
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>

        {/* Contact Form */}
        <Row id="contact" className="mb-5">
          <Col md={12}>
            <h2>Contact Me</h2>
            <ContactForm />
          </Col>
        </Row>
      </Container>
      <footer className="bg-dark text-white text-center py-3">
        <Container>
          <Row>
            <Col>
              <p>&copy; {new Date().getFullYear()} Gowthamraj Portfolio. All Rights Reserved.</p>
              <div>
                <a
                  href="https://github.com/Gowthamraj2000?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white me-3"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/gowthamraj-kumaravel-223149218/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white me-3"
                >
                  <FaLinkedin size={24} />
                </a>
                <a href="mailto:gowthamraj2392000@gmail.com" className="text-white">
                  <FaEnvelope size={24} />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default App;
