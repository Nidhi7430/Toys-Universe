import React, { useState } from "react";
import "./shop_product.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalBody,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTypography,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from "mdb-react-ui-kit";

const ShopProduct = (props) => {
  const [optLgModal, setOptLgModal] = useState(false);

  const toggleShow = () => setOptLgModal(!optLgModal);
  return (
    <>
      <div className="bg-image hover-overlay">
        <img src={props.image} className="w-100" alt="product" />
        <a href="#!">
          <div className="mask">
            <img src={props.image_hover} className="w-100" alt="product" />
            <MDBBtn
              className="text-dark shop_product_view py-2 w-100 rounded-0"
              onClick={toggleShow}
            >
              Quick View
            </MDBBtn>
          </div>
        </a>
      </div>
      <MDBCard className="shadow-0">
        <MDBCardBody className="text-center px-0">
          <MDBCardTitle className="fw-bold">{props.cardTitle}</MDBCardTitle>
          <MDBCardText>{props.cardText}</MDBCardText>
          <MDBBtn className="bg-warning w-100 rounded-pill" href="#">
            Add to cart
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
      <MDBModal
        tabIndex="-1"
        show={optLgModal}
        getOpenState={(e) => setOptLgModal(e)}
      >
        <MDBModalDialog size="lg">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBBtn
                type="button"
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBContainer>
                <MDBRow>
                  <MDBCol size="7">
                    <MDBCarousel showIndicators>
                      <MDBCarouselInner>
                        <MDBCarouselItem itemId={0}>
                          <MDBCarouselElement
                            src={props.modalImage1}
                            alt="..."
                          />
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId={1}>
                          <MDBCarouselElement
                            src={props.modalImage2}
                            alt="..."
                          />
                        </MDBCarouselItem>
                      </MDBCarouselInner>
                    </MDBCarousel>
                  </MDBCol>
                  <MDBCol size="5">
                    <MDBTypography variant="h3" className="fw-bold">
                      {props.modalTitle}
                    </MDBTypography>
                    <MDBTypography variant="h6" className="fw-bold">
                      {props.modalText}
                    </MDBTypography>
                    <MDBTypography>Quantity</MDBTypography>
                    <input
                      type="number"
                      id="typeNumber"
                      className="form-control w-25"
                      min="1"
                      max="10"
                      defaultValue="1"
                    />
                    <MDBBtn className="bg-warning w-100 rounded-pill mt-5">
                      Add to cart
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};
export default ShopProduct;
