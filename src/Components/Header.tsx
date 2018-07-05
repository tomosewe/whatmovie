import * as React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Link } from "react-router-dom";

interface State {
  isOpen: boolean;
}

const BrandImgStyles = {
  width: "30px"
};

class Header extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
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
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar={true}>
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
  }
}

export default Header;
