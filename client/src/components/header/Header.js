import React, { useState, useEffect } from "react";
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
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./header.css";

const Header = () => {
  const [showNavNoTogglerRight, setShowNavNoTogglerRight] = useState(false);
  const [path, showPath] = useState("");
  useEffect(() => {
    showPath(window.location.pathname);
  }, []);
  // const path = window.location.pathname;
  return (
    <MDBNavbar
      expand="lg"
      light
      bgColor="light"
      fixed="top"
      className="menu_hover"
    >
      <MDBContainer>
        <MDBNavbarBrand href="\Home">
          <h3 className="fw-bold logo">
            <span className="logo_f_letter">T</span>oys
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
                href="/HomePage"
                className={`text-dark ${path === "/HomePage" ? "active" : ""}`}
              >
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                href="/ShopPage"
                className={`text-dark ${path === "/ShopPage" ? "active" : ""}`}
              >
                Shop
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                href="/AboutPage"
                className={`text-dark ${path === "/AboutPage" ? "active" : ""}`}
              >
                About
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                href="/ContactPage"
                className={`text-dark ${
                  path === "/ContactPage" ? "active" : ""
                }`}
              >
                Conatct
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                href="/AddProductPage"
                className={`text-dark ${
                  path === "/AddProductPage" ? "active" : ""
                }`}
              >
                Add Product
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#!">
                <MDBBtn color="info">SignIn</MDBBtn>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#!">
                <MDBBtn color="info">Other</MDBBtn>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link">
                  <MDBIcon icon="user /"></MDBIcon>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Action</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Another action</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Something else here</MDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};
export default Header;
