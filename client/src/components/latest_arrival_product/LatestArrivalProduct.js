import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRipple,
  MDBBtn,
} from "mdb-react-ui-kit";

const LatestArrivalProduct = (props) => {
  return (
    <>
      <MDBCard className="shadow-0">
        <MDBRipple
          className="hover-overlay"
          rippleTag="div"
          rippleColor="light"
        >
          <div className="border-bottom square rounded-top rounded-3">
            <MDBCardImage src={props.image} fluid alt="..." />
          </div>
          {/* <div
            className="mask"
            style={{ backgroundColor: "rgb(249,49,84,80%)" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <a href="true" className="btn btn-outline-light rounded-pill">
                Add to cart
              </a>
            </div>
          </div> */}
        </MDBRipple>
        <MDBCardBody>
          <MDBCardTitle className="fw-bold">{props.cardTitle}</MDBCardTitle>
          <MDBCardText>{props.price}</MDBCardText>
          <MDBBtn className="bg-danger rounded-start square">
            Add to cart
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </>
  );
};

export default LatestArrivalProduct;
