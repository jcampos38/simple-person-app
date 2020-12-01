import React, { useState, useContext } from 'react';
import logo from './../static/img/logo.jpg';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarText
} from 'reactstrap';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md">
        <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" className="auto_img" />
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/create">Create</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/manage">Manage</Link>
            </NavItem>
          </Nav>
          <NavbarText>Person App</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;