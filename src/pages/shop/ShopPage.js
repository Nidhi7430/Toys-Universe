import React from "react";
import InnerBanner from "../../components/inner_banner/InnerBanner";
import shop from "../../images/shop.webp";
import ShopProduct from "../../components/shop_product/ShopProduct";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { PageLayout } from "../../components/page_layout/PageLayout";
import { products } from "../../services/product_list";

const ShopPage = () => {
  return (
    <>
      <PageLayout>
        <InnerBanner image={shop} title="Shop" />
        <MDBContainer breakpoint="md" className="py-5 my-3">
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
        </MDBContainer>
      </PageLayout>
    </>
  );
};

export default ShopPage;
