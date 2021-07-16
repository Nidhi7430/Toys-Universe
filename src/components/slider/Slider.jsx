import React from "react";
import slider1 from "../../images/slider1.webp";
import slider2 from "../../images/slider2.webp";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
  MDBTypography,
} from "mdb-react-ui-kit";
import "./slider.css";

const Slider = () => {
  return (
    <MDBCarousel showControls fade className="show_control_icon">
      <MDBCarouselInner>
        <MDBCarouselItem itemId={0}>
          <MDBCarouselElement src={slider1} alt="..." />
          <MDBCarouselCaption className="slider_caption">
            <MDBTypography
              tag="div"
              className="display-2 text-uppercase text-dark fw-bold mb-2"
            >
              Hope On Board
            </MDBTypography>
            <MDBTypography className="lead text-dark">
              With Our New Train Collection
            </MDBTypography>
            <a href="\Shop" className="btn btn-outline-info rounded-pill">
              Shop Now
            </a>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={1}>
          <MDBCarouselElement src={slider2} alt="..." />
          <MDBCarouselCaption className="slider_caption">
            <MDBTypography
              tag="div"
              className="display-2 text-uppercase text-dark fw-bold mb-2"
            >
              Watch them grow
            </MDBTypography>
            <MDBTypography className="lead text-dark">
              With Our New Train Collection
            </MDBTypography>
            <a href="\Shop" className="btn btn-outline-info rounded-pill">
              Shop Now
            </a>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
};

export default Slider;
