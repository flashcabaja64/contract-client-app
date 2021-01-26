import './Header.css'
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SideNav from '../Nav/SideNav';
import { UserContext } from '../../contexts/UserContext';
import TokenService from '../services/TokenService';
import { Nav, Navbar, Button } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const User = useContext(UserContext);
  const history = useHistory();
  const [sidebar, setSidebar] = useState(false);
  const showSideBar = () => setSidebar(!sidebar);
  
  const handleLogout = () => {  
    User.processLogout();
    history.push('/login');
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
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSideBar} />
          </Link>
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
      </Navbar>
      <SideNav 
        sidebar={sidebar}
        showSideBar={showSideBar}
      />
    </>
  )
}

export default Header;