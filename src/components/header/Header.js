import React, { useState, useContext } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
  MDBNavbarItem,
  MDBBtn,
} from 'mdb-react-ui-kit';
import './header.css';
import logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../services/auth';

const Header = () => {
  const { auth } = useContext(AuthContext);
  const [showNavNoTogglerRight, setShowNavNoTogglerRight] = useState(false);

  return (
    <>
      <MDBNavbar
        expand="lg"
        light
        bgColor="light"
        fixed="top"
        className="menu_hover"
      >
        <MDBContainer breakpoint="lg">
          <MDBNavbarBrand>
            <img src={logo} alt="logo" className="mw-100 header_logo" />
          </MDBNavbarBrand>
          <MDBNavbarToggler
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavNoTogglerRight(!showNavNoTogglerRight)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavNoTogglerRight}>
            <MDBNavbarNav
              right
              fullWidth={false}
              className="mb-2 mb-lg-0 mr-auto align-items-center"
            >
              <MDBNavbarItem>
                <MDBNavbarLink onClick={() => setShowNavNoTogglerRight(false)}>
                  <NavLink to="/home" activeClassName="active-link">
                    Home
                  </NavLink>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink onClick={() => setShowNavNoTogglerRight(false)}>
                  <NavLink to="/shop" activeClassName="active-link">
                    Shop
                  </NavLink>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink onClick={() => setShowNavNoTogglerRight(false)}>
                  <NavLink to="/about" activeClassName="active-link">
                    About
                  </NavLink>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink onClick={() => setShowNavNoTogglerRight(false)}>
                  <NavLink to="/contact" activeClassName="active-link">
                    Contact
                  </NavLink>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink onClick={() => setShowNavNoTogglerRight(false)}>
                  <NavLink to="/admin" activeClassName="active-link">
                    Admin
                  </NavLink>
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                {/* <MDBBtn outline rounded color="info" onClick={handleLogin}>
                  {auth.isAuthenticated
                    ? `Hello ${auth.userName}`
                    : "Login / Sign Up"}
                </MDBBtn> */}
                <NavLink to="/profile">
                  <MDBBtn
                    outline
                    rounded
                    color="info"
                    onClick={() => setShowNavNoTogglerRight(false)}
                  >
                    {auth.isAuthenticated ? auth.userName : 'Login / Sign Up'}
                  </MDBBtn>
                </NavLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default Header;
