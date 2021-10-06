import React from "react";
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

const Signup = () => {
  return (
    <MDBContainer>
      <MDBRow className="m-3">
        <MDBCol>
          <MDBInput disabled className="mb-3" type="email" label="Email" />
          <MDBInput
            disabled
            className="mb-3"
            type="password"
            label="Password"
          />
          <MDBInput
            disabled
            className="mb-3"
            type="password"
            label="Confirm Password"
          />
          <MDBBtn block disabled>
            Sign Up
          </MDBBtn>
          <MDBTypography className="text-center m-3" variant="h3">
            OR
          </MDBTypography>
          <MDBBtn block>
            <MDBIcon className="me-2" fab icon="google" /> Sign in with Google
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Signup;
