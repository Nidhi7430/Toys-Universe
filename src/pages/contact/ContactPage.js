import React, { useContext, useState } from "react";
import InnerBanner from "../../components/inner_banner/InnerBanner";
import contact from "../../images/contact.webp";
import {
  MDBInput,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";
import { PageLayout } from "../../components/page_layout/PageLayout";
import { AuthContext } from "../../services/auth";
import LocationMap from "../../components/location_map/LocationMap";

const ContactPage = () => {
  const { auth } = useContext(AuthContext);
  const [name, setName] = useState(auth.userName || "");
  const [email, setEmail] = useState(auth.userEmail || "");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  return (
    <PageLayout>
      <InnerBanner image={contact} title="Contact" />
      <MDBContainer breakpoint="lg" className="py-5 my-3">
        <MDBTypography
          tag="div"
          className="display-6 pb-5 text-info text-uppercase fw-bold text-center"
        >
          Business Inquiry
        </MDBTypography>
        <div className="p-3">
          <MDBRow className=" square border border-2 rounded-3 border-info p-4">
            <form>
              <MDBCol lg="6" md="6" className="py-3">
                <MDBInput
                  label="Name"
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                />
              </MDBCol>
              <MDBCol lg="12" md="12" className="py-3">
                <MDBInput
                  label="Email"
                  type="email"
                  validate
                  value={email}
                  onChange={handleEmailChange}
                />
              </MDBCol>
              <MDBCol lg="12" md="12" className="py-3">
                <MDBInput
                  label="Message"
                  textarea
                  rows={4}
                  value={message}
                  onChange={handleMessageChange}
                />
              </MDBCol>
              <MDBCol className="py-3">
                <MDBBtn
                  className="mx-2"
                  outline
                  rounded
                  color="info"
                  tag="input"
                  type="submit"
                  onClick={(e) => e.preventDefault()}
                />
              </MDBCol>
            </form>
          </MDBRow>
        </div>
        <MDBTypography
          tag="div"
          className="display-5 p-5 text-info text-uppercase fw-bold text-center"
        >
          Location
        </MDBTypography>
        <LocationMap />
      </MDBContainer>
    </PageLayout>
  );
};

export default ContactPage;
