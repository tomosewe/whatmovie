import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";

const BrandImgStyles = {
  width: "30px",
};

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar color="light" light={true} expand="md">
        <NavbarBrand href="/">
          <img
            style={BrandImgStyles}
            src="images/popcorn.png"
            alt="popcorn-brand-icon"
            className="d-inline-block align-top"
          />{" "}
          What movie should I watch?
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar={true}>
          <Nav className="ml-auto" navbar={true}>
            <NavItem>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://github.com/tomosewe/whatmovie"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source code
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
