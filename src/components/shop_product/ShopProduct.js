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
  MDBBtnGroup,
} from "mdb-react-ui-kit";

const ShopProduct = (props) => {
  const [optLgModal, setOptLgModal] = useState(false);

  const toggleShow = () => setOptLgModal(!optLgModal);
  return (
    <>
      <div className="bg-image hover-overlay border-bottom square rounded-top rounded-3">
        <img src={props.image} className="w-100" alt="product" />
        <a href="#!">
          <div className="mask  ">
            <img src={props.image_hover} className="w-100" alt="product" />
          </div>
        </a>
      </div>
      <MDBCard className="shadow-0">
        <MDBCardBody className="text-center px-0">
          <MDBCardTitle className="fw-bold">{props.cardTitle}</MDBCardTitle>
          <MDBCardText>{props.cardText}</MDBCardText>
          <MDBBtnGroup>
            <MDBBtn
              className="bg-danger rounded-start square"
              onClick={toggleShow}
            >
              View Detail
            </MDBBtn>
            <MDBBtn
              className="rounded-end square"
              href="#"
              color="danger"
              outline
            >
              Add to cart
            </MDBBtn>
          </MDBBtnGroup>
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
                  <MDBCol lg="7" md="6" sm="12">
                    <MDBCarousel showIndicators dark>
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
                  <MDBCol lg="5" md="6" sm="12" className="mt-2">
                    <MDBTypography variant="h3" className="fw-bold mb-2">
                      {props.modalTitle}
                    </MDBTypography>
                    <MDBTypography variant="h5" className="fw-bold mb-3">
                      {props.modalText}
                    </MDBTypography>
                    <MDBTypography className="mb-2 fw-bold" variant="h6">
                      Description :
                    </MDBTypography>
                    <MDBTypography className="mb-2">
                      Material : {props.material}
                    </MDBTypography>
                    <MDBTypography className="mb-2">
                      Thickness : {props.thickness}
                    </MDBTypography>
                    <MDBTypography className="mb-2">
                      Size : {props.size}
                    </MDBTypography>
                    <MDBTypography className="mb-2">
                      Package Contains : {props.packageContains}
                    </MDBTypography>
                    <MDBTypography className="mb-2">
                      Item Number : {props.itemNumber}
                    </MDBTypography>
                    <MDBTypography className="mb-2 text-warning">
                      Note : Colors may vary.
                    </MDBTypography>
                    <MDBTypography className="d-inline-block me-3">
                      Quantity :
                    </MDBTypography>
                    <input
                      type="number"
                      id="typeNumber"
                      className="form-control w-25 d-inline-block"
                      min="1"
                      max="10"
                      defaultValue="1"
                    />
                    <MDBBtn className="bg-danger rounded-3 mt-2 d-block">
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
