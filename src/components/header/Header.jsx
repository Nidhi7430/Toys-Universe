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
} from "mdb-react-ui-kit";
// import { Link } from "react-router-dom";

const Header = () => {
  const [showNavNoTogglerRight, setShowNavNoTogglerRight] = useState(false);

  return (
    <MDBNavbar expand="lg" light bgColor="light" fixed="top">
      <MDBContainer>
        <MDBNavbarBrand href="#">
          <h3 className="fw-bold">Toy Universe</h3>
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
            <MDBNavbarLink active aria-current="page" href="/Home">
              {/* <Link to="/Home">Home</Link> */}Home
            </MDBNavbarLink>
            <MDBNavbarLink href="/Shop">
              Shop
              {/* <Link to="/List">List</Link> */}
            </MDBNavbarLink>
            <MDBNavbarLink href="/About">About</MDBNavbarLink>
            <MDBNavbarLink href="/Contact">Conatct</MDBNavbarLink>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};
export default Header;
