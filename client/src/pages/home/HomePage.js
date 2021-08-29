import React from 'react';
import Slider from '../../components/slider/Slider';
// import FillerImage from "../../components/filler_image/FillerImage";
import LatestArrivalProduct from '../../components/latest_arrival_product/LatestArrivalProduct';
import latest_arrival1 from '../../images/latest_arrival1.jpg';
import latest_arrival2 from '../../images/latest_arrival2.jpg';
import latest_arrival3 from '../../images/latest_arrival3.jpg';
import latest_arrival4 from '../../images/latest_arrival4.jpg';
import latest_arrival5 from '../../images/latest_arrival5.jpg';
import latest_arrival6 from '../../images/latest_arrival6.jpg';
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from 'mdb-react-ui-kit';
import { PageLayout } from '../../components/page_layout/PageLayout';
const HomePage = () => {
  return (
    <PageLayout>
      <section className="home">
        <MDBRow>
          <MDBCol lg="12" md="12">
            <Slider />
          </MDBCol>
        </MDBRow>
      </section>
      <section className="latest_arrival text-center py-5 mt-3">
        <MDBTypography
          tag="div"
          className="display-5 pb-5 text-info text-uppercase fw-bold"
        >
          Our latest arrival
        </MDBTypography>
        <MDBRow>
          <MDBCol md="6" lg="4">
            <LatestArrivalProduct
              image={latest_arrival1}
              cardTitle="Bird Puzzle"
              price="Rs.2000"
            />
          </MDBCol>
          <MDBCol md="6" lg="4">
            <LatestArrivalProduct
              image={latest_arrival2}
              cardTitle="Fruit Puzzle"
              price="Rs.2000"
            />
          </MDBCol>
          <MDBCol md="6" lg="4">
            <LatestArrivalProduct
              image={latest_arrival3}
              cardTitle="Numbers Puzzle"
              price="Rs.2000"
            />
          </MDBCol>
          <MDBCol md="6" lg="4">
            <LatestArrivalProduct
              image={latest_arrival4}
              cardTitle="Solar system Puzzle"
              price="Rs.2000"
            />
          </MDBCol>
          <MDBCol md="6" lg="4">
            <LatestArrivalProduct
              image={latest_arrival5}
              cardTitle="Animal Puzzle"
              price="Rs.2000"
            />
          </MDBCol>
          <MDBCol md="6" lg="4">
            <LatestArrivalProduct
              image={latest_arrival6}
              cardTitle="Animal Puzzle"
              price="Rs.2000"
            />
          </MDBCol>
        </MDBRow>
      </section>
    </PageLayout>
  );
};

export default HomePage;
