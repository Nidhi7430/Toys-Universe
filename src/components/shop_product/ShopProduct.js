import React, { useState } from "react";
import "./shop_product.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBModal,
  MDBIcon,
  MDBBtnGroup,
} from "mdb-react-ui-kit";
import { ShopProductModal } from "./ShopProductModel";

const ShopProduct = (props) => {
  const [optLgModal, setOptLgModal] = useState(false);

  const toggleShow = () => setOptLgModal(!optLgModal);
  return (
    <>
      <div className="bg-image hover-overlay border-bottom square rounded-top rounded-3">
        <img src={props.image[0]} className="w-100" alt="product" />
        <a href="#!">
          <div className="mask  ">
            <img src={props.image[1]} className="w-100" alt="product" />
          </div>
        </a>
      </div>
      <MDBCard className="shadow-0">
        <MDBCardBody className="text-center px-0">
          <MDBCardTitle className="fw-bold">{props.productTitle}</MDBCardTitle>
          <MDBCardText>Rs. {props.productPrice}</MDBCardText>
          <MDBBtnGroup>
            <MDBBtn
              className="bg-danger rounded-start square"
              onClick={toggleShow}
            >
              View Detail
            </MDBBtn>
            <MDBBtn
              className="bg-success rounded-end square"
              href="https://wa.me/message/4FBPVKH3IYPKL1"
              target="_blank"
            >
              Buy from
              <MDBIcon fab icon="whatsapp" className="mx-2" />
            </MDBBtn>
          </MDBBtnGroup>
        </MDBCardBody>
      </MDBCard>
      <MDBModal
        tabIndex="-1"
        show={optLgModal}
        getOpenState={(e) => setOptLgModal(e)}
      >
        <ShopProductModal {...props} />
      </MDBModal>
    </>
  );
};
export default ShopProduct;
