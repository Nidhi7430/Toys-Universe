import React from "react";
import GoogleMap from "google-map-react";
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBTypography,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import config_var from "../../App.config";

const LocationMap = () => {
  return (
    <MDBContainer className="d-flex flex-column">
      <MDBCard>
        <MDBContainer style={{ height: "300px" }}>
          <GoogleMap
            bootstrapURLKeys={{
              key: config_var.GOOGLE_API_KEY,
            }}
            // apiKey={YOUR_GOOGLE_MAP_API_KEY} // set if you need stats etc ...
            defaultCenter={[23.593649, 72.363538]}
            zoom={18}
          >
            <MDBIcon
              icon="map-marker-alt"
              size="3x"
              lat="23.593649"
              lng="72.363538"
            />
          </GoogleMap>
        </MDBContainer>
        <MDBCardBody></MDBCardBody>
      </MDBCard>
      <MDBBtn
        rounded
        size="lg"
        color="info"
        className="m-3"
        target="_"
        href="https://goo.gl/maps/wpCBUQc39GaiQKw57"
      >
        <MDBIcon size="lg" icon="map-marker-alt" className="ml-2" />
        <MDBTypography variant="h6">
          TF-4, Gokul Meridian, Near Tahuko Party Plot, Mehsana, Gujarat, PIN
          384002, IND
        </MDBTypography>
      </MDBBtn>
    </MDBContainer>
  );
};

export default LocationMap;
