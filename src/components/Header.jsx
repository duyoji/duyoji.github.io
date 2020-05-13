import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem } from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);

    this.onClickLink = this.onClickLink.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  onClickLink() {
    if(this.state.isOpen) {
      this.toggle();
    }
  }

  render() {
    return (
      <Navbar className="mb-4" color="dark" dark expand="md">
        {this.state.status}
        <Link to='/' className="navbar-brand" onClick={this.onClickLink}>
          autoMATIon
        </Link>
        <NavbarToggler onClick={this.toggle} />
        <Collapse
          isOpen={this.state.isOpen}
          onEntered={this.onEntered}
          onExited={this.onExited}
          navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to='/' className="nav-link" onClick={this.onClickLink}>
                ホーム
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/profile' className="nav-link" onClick={this.onClickLink}>
                プロフィール
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/career' className="nav-link" onClick={this.onClickLink}>
                経歴
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/contact' className="nav-link" onClick={this.onClickLink}>
                お問い合わせ
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Header;