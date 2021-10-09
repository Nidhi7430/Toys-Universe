import React from "react";
import InnerBanner from "../../components/inner_banner/InnerBanner";
import shop from "../../images/shop.webp";
import ShopProduct from "../../components/shop_product/ShopProduct";
import { ShopProductModal } from "../../components/shop_product/ShopProductModel";
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
