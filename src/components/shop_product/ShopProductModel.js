import {
  MDBModalDialog,
  MDBModalContent,
  MDBBtn,
  MDBModalBody,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBIcon,
  MDBTypography,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from "mdb-react-ui-kit";

export const ShopProductModal = (props) => {
  return (
    <MDBModalDialog size="lg" centered>
      <MDBModalContent>
        <MDBModalBody>
          <MDBContainer>
            <MDBRow>
              <MDBCol lg="7" md="6" sm="12">
                <MDBCarousel showIndicators dark>
                  <MDBCarouselInner>
                    {props.image.map((image, index) => (
                      <MDBCarouselItem key={index} itemId={index}>
                        <MDBCarouselElement src={image} alt="..." />
                      </MDBCarouselItem>
                    ))}
                  </MDBCarouselInner>
                </MDBCarousel>
              </MDBCol>
              <MDBCol lg="5" md="6" sm="12" className="mt-2">
                <MDBTypography variant="h3" className="fw-bold mb-2">
                  {props.productTitle}
                </MDBTypography>
                <MDBTypography variant="h5" className="fw-bold mb-3">
                  Rs. {props.productPrice}
                </MDBTypography>
                <MDBTypography className="m-0   fw-bold" variant="h6">
                  Description
                </MDBTypography>
                <MDBTypography className="mb-2">
                  {props.productDescription}
                </MDBTypography>
                <MDBTypography className="mb-2">
                  Note: Image representations are not accurate at the moment.
                  Please check out Amazon link for the accurate images.
                </MDBTypography>

                <MDBInput disabled label="Qty" type="number" min="1" max="10" />

                {/* <input
                  type="number"
                  id="typeNumber"
                  className="form-control w-25 d-inline-block"
                  min="1"
                  max="10"
                  defaultValue="1"
                /> */}
                {/* <MDBBtn
                  disabled
                  block
                  role="button"
                  className="mt-2"
                  color="mdb"
                >
                  Add to cart
                </MDBBtn> */}

                <MDBBtn
                  href="https://www.amazon.in"
                  target="_blank"
                  className="bg-warning rounded-3 mt-2 d-block"
                  role="button"
                >
                  Buy from
                  <MDBIcon fab icon="amazon" className="mx-2" />
                </MDBBtn>

                <MDBBtn
                  href="https://wa.me/message/4FBPVKH3IYPKL1"
                  target="_blank"
                  className="bg-success rounded-3 mt-2 d-block"
                  role="button"
                >
                  Buy from
                  <MDBIcon fab icon="whatsapp" className="mx-2" />
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBModalBody>
      </MDBModalContent>
    </MDBModalDialog>
  );
};
