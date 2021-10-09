import React from "react";
import slider_1 from "../../images/slider_1.jpg";
import slider_2 from "../../images/slider_2.jpg";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import "./slider.css";

const Slider = () => {
  return (
    <MDBCarousel
      showControls
      showIndicators
      fade
      className="show_control_icon"
      dark
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId={0}>
          <MDBRow>
            <MDBCol lg="12">
              <MDBCarouselElement
                src={slider_1}
                alt="..."
                className="slider_image_animation"
              />
            </MDBCol>
          </MDBRow>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={1}>
          <MDBRow>
            <MDBCol lg="12">
              <MDBCarouselElement
                src={slider_2}
                alt="..."
                className="slider_image_animation"
              />
            </MDBCol>
          </MDBRow>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
};

export default Slider;
