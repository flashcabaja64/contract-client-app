import React from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="sticky">
        <Navbar.Brand href="#home">Contract</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to='/'>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/features'>Features</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/about'>About</Link>
            </Nav.Link>
          </Nav>
          <Nav inline>
            <Nav.Link>
              <Link to='/login'>Login</Link>
            </Nav.Link>
          </Nav>
          {/*
          <Form inline>
             <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
          */}
      </Navbar>
    </>
  )
}

export default Header