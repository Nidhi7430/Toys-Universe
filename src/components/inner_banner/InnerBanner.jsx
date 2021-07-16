import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";

const InnerBanner = (props) => {
  return (
    <>
      <MDBContainer>
        <MDBRow>
          <MDBCol size="4">
            <div className="bg-info card rounded-0 h-100">
              <div className="mask">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <p className="text-white mb-0 display-4">{props.title}</p>
                </div>
              </div>
            </div>
          </MDBCol>
          <MDBCol size="8">
            <img src={props.image} className="d-block w-100" alt="banner" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default InnerBanner;
