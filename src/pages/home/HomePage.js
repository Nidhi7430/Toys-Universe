import React from "react";
import Slider from "../../components/slider/Slider";
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { PageLayout } from "../../components/page_layout/PageLayout";
import { products } from "../../services/product_list";
import ShopProduct from "../../components/shop_product/ShopProduct";

const HomePage = () => {
  return (
    <>
      <PageLayout>
        <MDBContainer breakpoint="lg">
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
              {products.map((each) => {
                return (
                  <MDBCol lg="4" sm="6" xs="12" className="my-3">
                    <div className="shadow-5-strong rounded-3 square">
                      <ShopProduct
                        image={each.image}
                        productTitle={each.productTitle}
                        productPrice={each.productPrice}
                      />
                    </div>
                  </MDBCol>
                );
              })}
            </MDBRow>
          </section>
        </MDBContainer>
      </PageLayout>
    </>
  );
};

export default HomePage;
