import React from "react";
import InnerBanner from "../../components/inner_banner/InnerBanner";
import shop from "../../images/shop.webp";
import ShopProduct from "../../components/shop_product/ShopProduct";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import latest_arrival1 from "../../images/latest_arrival1.jpg";
import latest_arrival2 from "../../images/latest_arrival2.jpg";
import { PageLayout } from "../../components/page_layout/PageLayout";
import { useState } from "react";

const ShopPage = () => {
  const [products, setProducts] = useState([]);

  return (
    <PageLayout>
      <InnerBanner image={shop} title="Shop" />
      <MDBContainer className="py-5 my-3">
        <MDBRow>
          {products.map((product, index) => (
            <MDBCol key={index} lg="4" sm="6" xs="12" className="my-3">
              <ShopProduct
                image={[latest_arrival1, latest_arrival2]}
                productTitle={product.name}
                productDescription={product.description}
                price={product.price_inr}
                amazon_link={product.amazon_link || "https://www.amazon.in"}
              />
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </PageLayout>
  );
};

export default ShopPage;
