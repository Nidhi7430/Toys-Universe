import React from "react";
import "./footer.css";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";
import logo from "../../images/logo.png";
// import under_construction from "../../images/under_construction.png";

const Footer = () => {
  return (
    <>
      <MDBFooter className="text-white text-center text-lg-left bg-danger">
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <MDBNavbarBrand
                href="\HomePage"
                className="justify-content-center p-0 m-0"
              >
                <img src={logo} alt="logo" className="mw-100 header_logo" />
              </MDBNavbarBrand>
              <p className="mb-0 mt-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                atque ea quis molestias.
              </p>
            </MDBCol>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase mb-3">Visit</h5>
              <ul className="list-unstyled">
                <li className="my-2">
                  <a href="\ShopPage" className="text-white">
                    Shop
                  </a>
                </li>
                <li className="my-2">
                  <a href="\AboutPage" className="text-white">
                    About
                  </a>
                </li>
                <li className="my-2">
                  <a href="\ContactPage" className="text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase mb-3">Information</h5>
              <ul className="list-unstyled">
                <li className="my-2">
                  <a href="#!" className="text-white">
                    FAQ
                  </a>
                </li>
                <li className="my-2">
                  <a href="#!" className="text-white">
                    Shipping & returns
                  </a>
                </li>
                <li className="my-2">
                  <a href="#!" className="text-white">
                    Store Policy
                  </a>
                </li>
                <li className="my-2">
                  <a href="#!" className="text-white">
                    Payment Methods
                  </a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase mb-3">Contact Us</h5>
              <ul className="list-unstyled">
                <li className="my-2">
                  <a
                    href="mailto:vasukienterprise06@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white"
                  >
                    vasukienterprise06@gmail.com
                  </a>
                </li>
              </ul>
              <h6 className="text-uppercase mb-2">Follow us:</h6>
              <ul className="list-unstyled">
                <li className="mx-1 d-inline">
                  <a
                    href="https://www.facebook.com/toysuniverse.in/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MDBBtn size="sm" floating className="btn-light">
                      <MDBIcon
                        fab
                        icon="facebook-f"
                        className="text-danger text-md footer_social_icon"
                      />
                    </MDBBtn>
                  </a>
                </li>
                <li className="mx-1 d-inline">
                  <a
                    href="https://instagram.com/toysuniverse.in/ "
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MDBBtn size="sm" floating className="btn-light">
                      <MDBIcon
                        fab
                        icon="instagram"
                        className="footer_social_icon text-md text-danger"
                      />
                    </MDBBtn>
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a className="text-white" href="https://www.toysuniverse.in">
            toysuniverse.in
          </a>
        </div>
      </MDBFooter>
      <div className="under_construction">
        <img
          src={under_construction}
          style={{ verticalAlign: "middle" }}
          alt="under_construction"
        />
      </div>
    </>
  );
};

export default Footer;
