import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { useContext } from "react";
import { AuthContext } from "../../services/auth";

const Login = () => {
  const { handleLogin } = useContext(AuthContext);
  return (
    <MDBContainer>
      <MDBRow className="m-3">
        <MDBCol>
          <MDBInput disabled className="mb-3" type="text" label="Email" />
          <MDBInput disabled className="mb-3" type="text" label="Password" />
          <MDBBtn disabled block>
            Login
          </MDBBtn>
          <MDBTypography className="text-center m-3" variant="h3">
            OR
          </MDBTypography>
          <MDBBtn block onClick={handleLogin}>
            <MDBIcon className="me-2" fab icon="google" /> Sign in with Google
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;
