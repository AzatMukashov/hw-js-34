import {
  NavLink,
  Route,
  BrowserRouter as Router,
  Routes,
  Link,
} from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import Contact from "./components/Contact.tsx";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar bg="primary" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">
              Мой вебсайт
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={NavLink} to="/" end>
                  Дом
                </Nav.Link>
                <Nav.Link as={NavLink} to="/about" end>
                  О нас
                </Nav.Link>
                <Nav.Link as={NavLink} to="/contact" end>
                  Контакт
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className="mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
};

export default App;
