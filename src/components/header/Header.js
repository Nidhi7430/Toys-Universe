import React, { useState, useEffect, useContext } from "react";
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
} from "mdb-react-ui-kit";
import "./header.css";
import logo from "../../images/logo.png";
import { AuthContext } from "../../services/auth";
import { signInWithPopup, signOut } from "@firebase/auth";
import { firebase_auth, googleProvider } from "../../services/firebase";
import { Link } from "react-router-dom";

const Header = () => {
  const { auth, setAuth } = useContext(AuthContext);

  const [showNavNoTogglerRight, setShowNavNoTogglerRight] = useState(false);
  const [path, setPath] = useState("");

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(firebase_auth, googleProvider);
      setAuth({
        ...auth,
        isAuthenticated: true,
        userEmail: result.user.email,
        userName: result.user.displayName,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(firebase_auth);
      setAuth((prevState) => ({
        ...prevState,
        isAuthenticated: false,
        userEmail: null,
        userName: null,
      }));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setPath(window.location.pathname);
  }, []);
  return (
    <>
      <MDBNavbar
        expand="lg"
        light
        bgColor="light"
        fixed="top"
        className="menu_hover"
      >
        <MDBContainer>
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
                <Link
                  to="/home"
                  component={MDBNavbarLink}
                  className={`text-dark ${
                    path === "/HomePage" ? "active" : ""
                  }`}
                >
                  Home
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link
                  to="/shop"
                  component={MDBNavbarLink}
                  className={`text-dark ${
                    path === "/ShopPage" ? "active" : ""
                  }`}
                >
                  Shop
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link
                  to="/about"
                  component={MDBNavbarLink}
                  className={`text-dark ${
                    path === "/AboutPage" ? "active" : ""
                  }`}
                >
                  About
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link
                  to="/contact"
                  component={MDBNavbarLink}
                  className={`text-dark ${
                    path === "/ContactPage" ? "active" : ""
                  }`}
                >
                  Conatct
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link
                  to="/admin"
                  component={MDBNavbarLink}
                  className={`text-dark ${
                    path === "/AddProductPage" ? "active" : ""
                  }`}
                >
                  Add Product
                </Link>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBBtn outline rounded color="info" onClick={handleLogin}>
                  {auth.isAuthenticated
                    ? `Hello ${auth.userName}`
                    : "Login / Sign Up"}
                </MDBBtn>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default Header;
