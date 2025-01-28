import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Not-Loggedin</Navbar.Brand>
          <Nav className="fs-4">
            <Nav.Link as = {Link} to="/login" className='nav-link'>Login</Nav.Link>
            <Nav.Link as = {Link} to="/register" className='nav-link'>Register</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Layout
