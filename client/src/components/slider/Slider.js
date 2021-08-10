import React from "react";
import slider_1 from "../../images/slider_1.jpg";
import slider_3 from "../../images/slider_3.jpg";
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
                // style={{ height: "100vh" }}
              />
            </MDBCol>
            {/* <MDBCol lg="6" className="slider_text_animation">
              <MDBTypography
                tag="div"
                className="display-3 text-uppercase text-dark fw-bold my-4"
              >
                Wooden Jigsaw Puzzle
              </MDBTypography>
              <MDBTypography className="lead text-dark">
                With Our New Train Collection
              </MDBTypography>
              <a href="\Shop" className="btn btn-outline-info rounded-pill">
                Shop Now
              </a>
            </MDBCol> */}
          </MDBRow>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={1}>
          <MDBRow>
            <MDBCol lg="12">
              <MDBCarouselElement
                src={slider_2}
                alt="..."
                className="slider_image_animation"
                // style={{ height: "100vh" }}
              />
            </MDBCol>
            {/* <MDBCol lg="6" className="slider_text_animation">
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
            </MDBCol> */}
          </MDBRow>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
          <MDBRow>
            <MDBCol lg="12">
              <MDBCarouselElement
                src={slider_3}
                alt="..."
                className="slider_image_animation"
              />
            </MDBCol>
            {/* <MDBCol lg="6" className="slider_text_animation">
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
            </MDBCol> */}
          </MDBRow>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
};

export default Slider;
