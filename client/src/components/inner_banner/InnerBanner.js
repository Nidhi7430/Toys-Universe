import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";

const InnerBanner = (props) => {
  return (
    <>
      <MDBContainer breakpoint="md">
        <MDBRow>
          <MDBCol lg="4" md="4" sm="12">
            <div className="bg-info card rounded-0 h-100">
              <div className="mask">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <p className="text-white mb-0 display-4">{props.title}</p>
                </div>
              </div>
            </div>
          </MDBCol>
          <MDBCol lg="8" md="8" sm="12">
            <img src={props.image} className="d-block w-100" alt="banner" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default InnerBanner;
