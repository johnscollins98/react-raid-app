import React from 'react';
import { Link } from 'react-router-dom';
import { Nav as BSNav, Navbar, NavDropdown } from "react-bootstrap";

import { INavProps, IWing, IEncounter } from '../../utilities/Interfaces';

function getDropdownLinks(wing: IWing) {
  return wing.encounters.map((encounter: IEncounter) => {
    const link = `/encounter/${wing.id}/${encounter.id}`;
    return <NavDropdown.Item as={Link} to={link} key={encounter.id} eventKey={encounter.id}>{encounter.label}</NavDropdown.Item>
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
  const logo_image = require("../assets/images/SO_Logo.png");
  return (
    <Navbar bg="dark" fixed="top" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">
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
          <BSNav.Item>
            <BSNav.Link eventKey="home" as={Link} to="/">Home</BSNav.Link>
          </BSNav.Item>
          {getDropdowns(props.wings)}
        </BSNav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav;
