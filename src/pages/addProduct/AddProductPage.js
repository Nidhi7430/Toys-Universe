import React, { useState } from "react";
import InnerBanner from "../../components/inner_banner/InnerBanner";
import about from "../../images/about.webp";
import {
  MDBInput,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";
import { api } from "../../services/axios";

import TagsInput from "../../components/tags_input/TagsInput";
import { PageLayout } from "../../components/page_layout/PageLayout";

const AddProductPage = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price_inr: 0,
    tags: [],
    amazon_link: "",
  });

  const onChangeName = (e) =>
    setProductData({ ...productData, name: e.target.value });
  const onChangeDescription = (e) =>
    setProductData({ ...productData, description: e.target.value });
  const onChangePrice = (e) =>
    setProductData({ ...productData, price_inr: e.target.value });
  const onChangeAmazonLink = (e) =>
    setProductData({ ...productData, amazon_link: e.target.value });

  const AddProduct = async () => {
    console.log(productData);
    await api
      .post("/product/add", productData)
      .then((res) => {
        if (res.status === 201) console.log("Product Added!");
      })
      .catch((err) => console.log("Something went wrong!"));
  };

  return (
    <PageLayout>
      <InnerBanner image={about} title="Add Product" />
      <MDBContainer className="py-5 my-3">
        <MDBTypography
          tag="div"
          className="display-5 pb-5 text-info text-uppercase fw-bold text-center"
        >
          Add Product
        </MDBTypography>
        <div className="p-3">
          <MDBRow className="border-2 rounded-3 border-info border square p-4">
            <MDBCol lg="6" md="6" className="py-3">
              <MDBInput
                data-name="name"
                label="Name"
                id="typeText"
                type="text"
                value={productData.name}
                onChange={onChangeName}
              />
            </MDBCol>
            <MDBCol lg="6" md="6" className="py-3">
              <MDBInput
                label="Amazon Link"
                id="typeURL"
                type="url"
                value={productData.amazon_link}
                onChange={onChangeAmazonLink}
              />
            </MDBCol>
            <MDBCol lg="6" md="6" className="py-3">
              <MDBInput
                label="Price"
                id="typeNumber"
                type="number"
                value={productData.price_inr}
                onChange={onChangePrice}
              />
            </MDBCol>
            <MDBCol lg="6" md="6" className="py-3">
              <MDBInput
                label="Description"
                id="textAreaExample"
                textarea
                rows={4}
                value={productData.description}
                onChange={onChangeDescription}
              />
            </MDBCol>

            <MDBCol lg="6" md="6" className="py-3">
              <TagsInput
                productData={productData}
                setProductData={setProductData}
              />
            </MDBCol>
            <MDBCol className="py-3">
              <MDBBtn outline color="info" rounded onClick={AddProduct}>
                Submit
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </div>
      </MDBContainer>
    </PageLayout>
  );
};

export default AddProductPage;
