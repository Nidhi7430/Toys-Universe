import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRipple,
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
          <MDBCardImage src={props.image} fluid alt="..." />
          <div
            className="mask"
            style={{ backgroundColor: "rgb(245,92,74,80%)" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <a href="true" className="btn btn-outline-light rounded-pill">
                Add to cart
              </a>
            </div>
          </div>
        </MDBRipple>
        <MDBCardBody>
          <MDBCardTitle className="fw-bold">{props.cardTitle}</MDBCardTitle>
          <MDBCardText>{props.price}</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </>
  );
};

export default LatestArrivalProduct;
