import './App.css'
import { NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import Home from './components/Home.tsx';
import About from './components/About.tsx';
import Contact from './components/Contact.tsx';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#">Мой вебсайт</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={NavLink} to="/" end>Дом</Nav.Link>
              <Nav.Link as={NavLink} to="/about" end>О нас</Nav.Link>
              <Nav.Link as={NavLink} to="/contact" end>Контакт</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </Router>
  )
};

export default App
