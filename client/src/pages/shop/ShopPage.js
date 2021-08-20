import React from "react";
import InnerBanner from "../../components/inner_banner/InnerBanner";
import shop from "../../images/shop.webp";
import ShopProduct from "../../components/shop_product/ShopProduct";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import latest_arrival1 from "../../images/latest_arrival1.jpg";
import latest_arrival2 from "../../images/latest_arrival2.jpg";
import latest_arrival3 from "../../images/latest_arrival3.jpg";
import latest_arrival4 from "../../images/latest_arrival4.jpg";
import latest_arrival5 from "../../images/latest_arrival5.jpg";
import latest_arrival6 from "../../images/latest_arrival6.jpg";
import latest_arrival1_hover from "../../images/latest_arrival1_hover.jpg";
import latest_arrival2_hover from "../../images/latest_arrival2_hover.jpg";
import latest_arrival3_hover from "../../images/latest_arrival3_hover.jpg";
import latest_arrival4_hover from "../../images/latest_arrival4_hover.jpg";
import latest_arrival5_hover from "../../images/latest_arrival5_hover.jpg";
import latest_arrival6_hover from "../../images/latest_arrival6_hover.jpg";

const ShopPage = () => {
  return (
    <>
      <InnerBanner image={shop} title="Shop" />
      <MDBContainer className="py-5 my-3">
        <MDBRow>
          <MDBCol md="6" lg="4">
            <ShopProduct
              image={latest_arrival1}
              image_hover={latest_arrival1_hover}
              cardTitle="Bird Puzzle"
              cardText="Rs.2000"
              modalTitle="Bird Puzzle"
              modalText="Rs.2000"
              modalImage1={latest_arrival1}
              modalImage2={latest_arrival1_hover}
            />
          </MDBCol>
          <MDBCol md="6" lg="4">
            <ShopProduct
              image={latest_arrival2}
              image_hover={latest_arrival2_hover}
              cardTitle="Fruit Puzzle"
              cardText="Rs.2000"
              modalTitle="Fruit Puzzle"
              modalText="Rs.2000"
              modalImage1={latest_arrival2}
              modalImage2={latest_arrival2_hover}
            />
          </MDBCol>
          <MDBCol md="6" lg="4">
            <ShopProduct
              image={latest_arrival3}
              image_hover={latest_arrival3_hover}
              cardTitle="Numbers Puzzle"
              cardText="Rs.2000"
              modalTitle="Numbers Puzzle"
              modalText="Rs.2000"
              modalImage1={latest_arrival3}
              modalImage2={latest_arrival3_hover}
            />
          </MDBCol>
          <MDBCol md="6" lg="4">
            <ShopProduct
              image={latest_arrival4}
              image_hover={latest_arrival4_hover}
              cardTitle="Solar System Puzzle"
              cardText="Rs.2000"
              modalTitle="Solar System Puzzle"
              modalText="Rs.2000"
              modalImage1={latest_arrival4}
              modalImage2={latest_arrival4_hover}
            />
          </MDBCol>
          <MDBCol md="6" lg="4">
            <ShopProduct
              image={latest_arrival5}
              image_hover={latest_arrival5_hover}
              cardTitle="Animal Puzzle"
              cardText="Rs.2000"
              modalTitle="Animal Puzzle"
              modalText="Rs.2000"
              modalImage1={latest_arrival5}
              modalImage2={latest_arrival5_hover}
            />
          </MDBCol>
          <MDBCol md="6" lg="4">
            <ShopProduct
              image={latest_arrival6}
              image_hover={latest_arrival6_hover}
              cardTitle="Animal Puzzle"
              cardText="Rs.2000"
              modalTitle="Animal Puzzle"
              modalText="Rs.2000"
              modalImage1={latest_arrival6}
              modalImage2={latest_arrival6_hover}
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default ShopPage;
