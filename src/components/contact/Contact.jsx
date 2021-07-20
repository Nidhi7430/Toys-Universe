import React from "react";
import InnerBanner from "../inner_banner/InnerBanner";
import contact from "../../images/contact.webp";
import {
  MDBInput,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";

const Contact = () => {
  return (
    <>
      <InnerBanner image={contact} title="Contact" />
      <MDBContainer className="py-5 my-3">
        <MDBTypography
          tag="div"
          className="display-5 pb-5 text-info text-uppercase fw-bold text-center"
        >
          Contact Us
        </MDBTypography>
        <MDBRow className=" square border border-2 rounded-3 border-info p-4">
          <MDBCol lg="6" md="6" className="py-3">
            <MDBInput label="First Name" id="typeText" type="text" />
          </MDBCol>
          <MDBCol lg="6" md="6" className="py-3">
            <MDBInput label="Last Name" id="typeText1" type="text" />
          </MDBCol>
          <MDBCol lg="12" md="12" className="py-3">
            <MDBInput label="Email" id="typeEmail" type="email" />
          </MDBCol>
          <MDBCol lg="12" md="12" className="py-3">
            <MDBInput label="Message" id="textAreaExample" textarea rows={4} />
          </MDBCol>
          <MDBCol className="py-3">
            <MDBBtn
              className="mx-2"
              outline
              rounded
              tag="input"
              type="submit"
              value="Submit"
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Contact;
