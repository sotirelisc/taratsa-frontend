import React from 'react';
import { connect } from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
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

  renderMenu() {
    if (this.props.auth.isSignedIn) {
      return (
        <React.Fragment>
          {
            this.props.auth.userData.role === 'host'
            ?
            (
            <NavItem>
              <NavLink tag={Link} to="/taratses/new">Create Taratsa</NavLink>
            </NavItem>
            )
            :
            null
          }
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              {this.props.auth.userData.firstname}
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem tag={Link} to="/users/profile">
                Profile
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem tag={Link} to="/users/signout">
                Sign Out
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <NavItem>
          <NavLink tag={Link} to="/users/signup">Sign Up</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/users/signin">Sign In</NavLink>
        </NavItem>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand tag={Link} to="/">Taratsa</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {this.renderMenu()}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps, {
  
})(Header);