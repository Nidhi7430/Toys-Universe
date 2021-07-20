import React, { useState } from "react";
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
} from "mdb-react-ui-kit";
import "./header.css";

const Header = () => {
  const [showNavNoTogglerRight, setShowNavNoTogglerRight] = useState(false);
  const path = window.location.pathname;
  return (
    <MDBNavbar expand="lg" light bgColor="light" fixed="top">
      <MDBContainer>
        <MDBNavbarBrand href="\Home">
          <h3 className="fw-bold logo">
            <span className="logo_f_letter">T</span>oy
            <span className="logo_s_letter">U</span>niverse
          </h3>
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
            className="mb-2 mb-lg-0 mr-auto"
          >
            <MDBNavbarItem>
              <MDBNavbarLink
                aria-current="page"
                href="/Home"
                className={`text-dark ${path === "/Home" ? "active" : ""}`}
              >
                {/* <Link to="/Home">Home</Link> */}Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                href="/Shop"
                className={`text-dark ${path === "/Shop" ? "active" : ""}`}
              >
                Shop
                {/* <Link to="/List">List</Link> */}
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                href="/About"
                className={`text-dark ${path === "/About" ? "active" : ""}`}
              >
                About
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                href="/Contact"
                className={`text-dark ${path === "/Contact" ? "active" : ""}`}
              >
                Conatct
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};
export default Header;
