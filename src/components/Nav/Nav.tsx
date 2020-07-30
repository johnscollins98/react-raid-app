import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import NavLink from 'react-bootstrap/NavLink';
import BSNav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { INavProps, IWing, IEncounter } from '../../utilities/Interfaces';

function getDropdownLinks(wing: IWing) {
  return wing.encounters.map((encounter: IEncounter) => {
    const link = `/encounter/${wing.id}/${encounter.id}`;
    return <NavDropdown.Item as={RRNavLink} exact to={link} key={encounter.id} activeClassName="active">{encounter.label}</NavDropdown.Item>
  })
}

function getDropdowns(wings: Array<IWing>) {
  return wings.map((wing: IWing) => (
    <BSNav.Item key={wing.id}>
      <NavDropdown title={wing.label} id="basic-nav-dropdown">
        {getDropdownLinks(wing)}
      </NavDropdown>
    </BSNav.Item>
  ))
}

function Nav(props: INavProps) {
  const logo_image = require("../../assets/images/SO_Logo.png");
  return (
    <Navbar bg="dark" fixed="top" variant="dark" expand="lg">
      <Navbar.Brand as={RRNavLink} exact to="/">
        <img
          alt="Logo"
          src={logo_image}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Sunspear Order
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <BSNav className="mr-auto">
          {getDropdowns(props.wings)}
        </BSNav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav;
