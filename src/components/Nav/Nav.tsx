import React, { useRef, useState } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import BSNav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { INavProps, IWing, IEncounter } from "../../utilities/Interfaces";
import "./Nav.css";

enum ELabelKeys {
  short = 1,
  medium,
  long,
}

function getDropdownLinks(wing: IWing) {
  return wing.encounters.map((encounter: IEncounter) => {
    const link = `/encounter/${wing.id}/${encounter.id}`;
    return (
      <NavDropdown.Item
        as={RRNavLink}
        exact
        to={link}
        id="dropdown-item"
        key={encounter.id}
        activeClassName="active"
      >
        {encounter.label}
      </NavDropdown.Item>
    );
  });
}

function getLabel(wing: IWing, labelKey: ELabelKeys) {
  switch (labelKey) {
    case ELabelKeys.short:
      return wing.wingLabel;
    case ELabelKeys.medium:
      return wing.wingName;
    default:
      return `${wing.wingLabel}: ${wing.wingName}`;
  }
}

function getDropdowns(wings: Array<IWing>, labelKey: ELabelKeys) {
  return wings.map((wing: IWing) => (
    <BSNav.Item key={wing.id}>
      <NavDropdown title={getLabel(wing, labelKey)} id="basic-nav-dropdown">
        {getDropdownLinks(wing)}
      </NavDropdown>
    </BSNav.Item>
  ));
}

function getLabelKey() {
  const windowWidth = window.innerWidth;

  if (windowWidth < 1000) {
    return ELabelKeys.long;
  } else if (windowWidth < 1500) {
    return ELabelKeys.short;
  } else if (windowWidth < 1800) {
    return ELabelKeys.medium;
  } else {
    return ELabelKeys.long;
  }
}

function Nav(props: INavProps) {
  const barRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLAnchorElement>(null);

  const [labelKey, setLabelKey] = useState(getLabelKey());
  const logoImage = require("../../assets/images/SO-Logo.png");

  window.addEventListener("resize", () => setLabelKey(getLabelKey()));

  return (
    <Navbar
      ref={barRef}
      fixed="top"
      variant="dark"
      expand="lg"
      style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
    >
      <Navbar.Brand as={RRNavLink} ref={brandRef} exact to="/">
        <img
          alt="Logo"
          src={logoImage}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Sunspear Order
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <BSNav className="mr-auto" ref={contentRef}>
          {getDropdowns(props.wings, labelKey)}
        </BSNav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav;
