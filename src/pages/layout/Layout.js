import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const Layout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');  // Ensure navigation after logout
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">{token ? "Logged In" : "Not Logged In"}</Navbar.Brand>
        <Nav className="fs-4">
          {token ? (
            <>
              <Nav.Link as={Link} to="/dashboard" className="nav-link">Dashboard</Nav.Link>
              <Nav.Link onClick={handleLogout} className="nav-link" style={{ cursor: "pointer" }}>
                Log Out
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link as={Link} to="/login" className="nav-link">Login</Nav.Link>
              <Nav.Link as={Link} to="/register" className="nav-link">Register</Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Layout;
