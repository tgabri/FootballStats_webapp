import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import './NavBar.css';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar
      color='dark'
      className='navbar-dark navbar-fixed-top'
      light
      expand='md'
    >
      <NavbarBrand href='/'>
        <img src='/img/ball.png' />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink href='/competitions'>COMPETITIONS</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/teams'>TEAMS</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/matches'>MATCHES</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
