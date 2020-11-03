import './Header.css'
import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import TokenService from '../services/TokenService';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  const User = useContext(UserContext)

  const handleLogout = () => {
    User.processLogout()
  }

  const renderLogoutLink = () => {
    return (
      <>
        <Nav.Link 
          as={Link} 
          to='/'
          onClick={handleLogout}
        >
          Logout
        </Nav.Link>
      </>
    )
  };

  const renderLoginLink = () => {
    return (
      <>
        <Nav.Link as={Link} to='/login'>Login</Nav.Link>
        <Button variant="primary" as={Link} to="/register">
          Sign-Up
        </Button>
      </>
    )
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="sticky">
        <Navbar.Brand href="/">Contract</Navbar.Brand>
          <Nav className="mr-auto">
              {/* <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to='/features'>Features</Nav.Link>
              <Nav.Link as={Link} to='/about'>About</Nav.Link> */}
          </Nav>
          <Nav>
            {TokenService.hasAuthToken() 
              ? renderLogoutLink() 
              : renderLoginLink()
            }
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

export default Header;