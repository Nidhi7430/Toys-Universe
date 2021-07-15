import React from "react";
import Slider from "../slider/Slider";
import FillerImage from "../filler_image/FillerImage";
import home1 from "../../images/home1.webp";
import home2 from "../../images/home2.webp";
import home3 from "../../images/home3.webp";
import home4 from "../../images/home4.webp";
import LatestArrivalProduct from "../latest_arrival_product/LatestArrivalProduct";
import latest_arrival1 from "../../images/latest_arrival1.webp";
import latest_arrival2 from "../../images/latest_arrival2.webp";
import latest_arrival3 from "../../images/latest_arrival3.webp";
import { MDBTypography } from "mdb-react-ui-kit";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <Slider />
            </div>
            <div className="col-4 d-flex flex-column justify-content-between">
              <FillerImage
                cardTitle="About the Toys Universe"
                buttonText="Our Story"
                image={home1}
              />
              <br />
              <FillerImage image={home2} />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-4">
              <FillerImage image={home3} />
            </div>
            <div className="col-8">
              <FillerImage
                cardTitle="20% Discount On All Toy Trains"
                buttonText="Shop Now"
                image={home4}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="latest_arrival text-center py-5 mt-5">
        <div className="container">
          <MDBTypography
            tag="div"
            className="display-5 pb-5 text-info text-uppercase fw-bold"
          >
            Our latest arrival
          </MDBTypography>
          <div className="row">
            <div className="col-4">
              <LatestArrivalProduct
                image={latest_arrival1}
                cardTitle="Wooden Car"
                price="Rs.2000"
              />
            </div>
            <div className="col-4">
              <LatestArrivalProduct
                image={latest_arrival2}
                cardTitle="Wooden Car"
                price="Rs.2000"
              />
            </div>
            <div className="col-4">
              <LatestArrivalProduct
                image={latest_arrival3}
                cardTitle="Wooden Car"
                price="Rs.2000"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
