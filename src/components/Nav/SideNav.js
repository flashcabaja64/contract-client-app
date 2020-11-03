import React from 'react';
import './SideNav.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SideNav = ({ sidebar, showSideBar}) => {
  // https://azouaoui-med.github.io/react-pro-sidebar/

  return (
    <>
      <Nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items" onClick={showSideBar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/">
              <AiIcons.AiOutlineHome />
              <span>Home</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/features">
              <AiIcons.AiOutlineForm />
              <span>Forms</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/about">
              <FaIcons.FaBook />
              <span>About</span>
            </Link>
          </li>
        </ul>
      </Nav>
    </>
  )
};

export default SideNav;