import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
//import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
        <Navbar className="navbar-dark navbar-expand-md sticky-top bg-dark py-3" light>
                <Container>
                    <NavbarBrand className="d-flex align-items-center" tag={Link} to="/">Телефонный справочник</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} />
            {/*<NavbarToggler onClick={this.toggleNavbar} dataBsToggle="collapse" dataBsTarget="#navcol5" />*/}
            <Collapse className="navbar-collapse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav ms-auto">
                <NavItem>
                  <NavLink tag={Link}  to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="active" to="/counter">Counter</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/fetch-data">Fetch data</NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
    );
  }
}
