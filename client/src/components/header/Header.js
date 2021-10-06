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
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBInput,
} from "mdb-react-ui-kit";
import "./header.css";
import logo from "../../images/logo.png";

const Header = () => {
  const [showNavNoTogglerRight, setShowNavNoTogglerRight] = useState(false);
  const [path, showPath] = useState("");
  useEffect(() => {
    showPath(window.location.pathname);
  }, []);
  // const path = window.location.pathname;

  const [toggleOneModal, setToggleOneModal] = useState(false);
  const [toggleTwoModal, setToggleTwoModal] = useState(false);

  return (
    <>
      <MDBNavbar
        expand="lg"
        light
        bgColor="light"
        fixed="top"
        className="menu_hover"
      >
        <MDBContainer breakpoint="md">
          <MDBNavbarBrand href="\Home">
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
                <MDBNavbarLink
                  aria-current="page"
                  href="/HomePage"
                  className={`text-dark ${
                    path === "/HomePage" ? "active" : ""
                  }`}
                >
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  href="/ShopPage"
                  className={`text-dark ${
                    path === "/ShopPage" ? "active" : ""
                  }`}
                >
                  Shop
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  href="/AboutPage"
                  className={`text-dark ${
                    path === "/AboutPage" ? "active" : ""
                  }`}
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
                <MDBBtn
                  onClick={() => setToggleOneModal(!toggleOneModal)}
                  color="info"
                >
                  Login
                </MDBBtn>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link" href="#!">
                    <MDBIcon icon="user /"></MDBIcon>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem>
                      <MDBDropdownLink href="#!">Action</MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <MDBDropdownLink href="#!">
                        Another action
                      </MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <MDBDropdownLink href="#!">
                        Something else here
                      </MDBDropdownLink>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <MDBModal
        show={toggleOneModal}
        getOpenState={(e) => setToggleOneModal(e)}
        tabIndex="-1"
      >
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Login</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={() => setToggleOneModal(!toggleOneModal)}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <form>
                <MDBInput
                  label="Type your email"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  className="my-4"
                />
                <MDBInput
                  label="Type your password"
                  group
                  type="password"
                  validate
                  className="my-4"
                />
                <p className="font-small d-flex justify-content-end">
                  Forgot
                  <a href="#!" className="text-info font-weight-bold ms-1">
                    Password?
                  </a>
                </p>
                <div className="text-center ">
                  <MDBBtn color="info">Login</MDBBtn>
                </div>
                <p className="font-small d-flex justify-content-center mt-3">
                  Don't have an account?
                  <a
                    onClick={() => {
                      setToggleOneModal(!toggleOneModal);
                      setTimeout(() => {
                        setToggleTwoModal(!toggleTwoModal);
                      }, 400);
                    }}
                    href="#!"
                    className="text-info font-weight-bold ms-1"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      <MDBModal
        show={toggleTwoModal}
        getOpenState={(e) => setToggleTwoModal(e)}
        tabIndex="-1"
      >
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Sign Up</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={() => setToggleTwoModal(!toggleTwoModal)}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBInput
                label="Your name"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                className="my-4"
              />
              <MDBInput
                label="Your email"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                className="my-4"
              />
              <MDBInput
                label="Confirm your email"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                className="my-4"
              />
              <MDBInput
                label="Your password"
                group
                type="password"
                validate
                className="my-4"
              />
              <div className="text-center ">
                <MDBBtn color="info">Sign Up</MDBBtn>
              </div>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};
export default Header;
