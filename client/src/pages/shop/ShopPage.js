import React from "react";
import InnerBanner from "../../components/inner_banner/InnerBanner";
import shop from "../../images/shop.webp";
import ShopProduct from "../../components/shop_product/ShopProduct";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import product1 from "../../images/product1.webp";
import prodcut1_hover from "../../images/product1_hover.webp";
import product2 from "../../images/product2.webp";
import prodcut2_hover from "../../images/product2_hover.webp";
import product3 from "../../images/product3.webp";
import prodcut3_hover from "../../images/product3_hover.webp";

const ShopPage = () => {
  return (
    <>
      <InnerBanner image={shop} title="Shop" />
      <MDBContainer className="py-5 my-3">
        <MDBRow>
          <MDBCol md="6" lg="4">
            <ShopProduct
              image={product1}
              image_hover={prodcut1_hover}
              cardTitle="Wooden Car"
              cardText="Rs.2000"
              modalTitle="Classic Abacus"
              modalText="Rs.2000"
              modalImage1={product1}
              modalImage2={prodcut1_hover}
            />
          </MDBCol>
          <MDBCol md="6" lg="4">
            <ShopProduct
              image={product2}
              image_hover={prodcut2_hover}
              cardTitle="Wooden Car"
              cardText="Rs.2000"
              modalTitle="Classic Abacus"
              modalText="Rs.2000"
              modalImage1={product2}
              modalImage2={prodcut2_hover}
            />
          </MDBCol>
          <MDBCol md="6" lg="4">
            <ShopProduct
              image={product1}
              image_hover={prodcut1_hover}
              cardTitle="Wooden Car"
              cardText="Rs.2000"
              modalTitle="Classic Abacus"
              modalText="Rs.2000"
              modalImage1={product1}
              modalImage2={prodcut1_hover}
            />
          </MDBCol>
          <MDBCol md="6" lg="4">
            <ShopProduct
              image={product3}
              image_hover={prodcut3_hover}
              cardTitle="Wooden Car"
              cardText="Rs.2000"
              modalTitle="Classic Abacus"
              modalText="Rs.2000"
              modalImage1={product3}
              modalImage2={prodcut3_hover}
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default ShopPage;
