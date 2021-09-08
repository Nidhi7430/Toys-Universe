import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBInput,
} from "mdb-react-ui-kit";

const LoginModal = () => {
  const [toggleOneModal, setToggleOneModal] = useState(false);
  const [toggleTwoModal, setToggleTwoModal] = useState(false);

  return (
    <>
      <MDBModal
        show={toggleOneModal}
        getOpenState={(e: any) => setToggleOneModal(e)}
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
        getOpenState={(e: any) => setToggleTwoModal(e)}
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

export default LoginModal;
