import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
} from 'mdb-react-ui-kit';

export const Login = ({ showLogin, closeLogin }) => {
  return (
    <>
      <MDBModal show={showLogin} tabIndex="-1">
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Login to your account</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={closeLogin}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBInput label="Email" className="mb-3" type="email" />
              <MDBInput label="Password" className="mb-3" type="password" />
            </MDBModalBody>

            <div className="d-grid gap-2 px-3">
              <MDBBtn>Login</MDBBtn>
            </div>
            <MDBModalFooter></MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};
