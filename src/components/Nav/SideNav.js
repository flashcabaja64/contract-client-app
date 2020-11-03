import React from 'react';
import { Nav, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SideNav = () => {
  return (
    <Nav className="flex-column">
      {/* <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to='/features'>Features</Nav.Link>
      <Nav.Link as={Link} to='/about'>About</Nav.Link> */}
      <ul className="lisst-unstyled components">
        <li><Nav.Link as={Link} to="/">Home</Nav.Link></li>
        <li>
          <Dropdown>
            <Dropdown.Toggle as="ul">Forms</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/login">Form 1</Dropdown.Item>
              <Dropdown.Item as={Link} to="/about">Form 2</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <ul className="collapse lisst-unstyled">
            <li>
              <Nav.Link as={Link} to="/">Form 1</Nav.Link>
            </li>
            <li>
              <Nav.Link as={Link} to="/">Form 2</Nav.Link>
            </li>
          </ul>
        </li>
      </ul>
    </Nav>
  )
};

export default SideNav;