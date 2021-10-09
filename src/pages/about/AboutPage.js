import React from "react";
import InnerBanner from "../../components/inner_banner/InnerBanner";
import about from "../../images/about.webp";
import { MDBTypography, MDBContainer } from "mdb-react-ui-kit";
import { PageLayout } from "../../components/page_layout/PageLayout";

const AboutPage = () => {
  return (
    <>
      <PageLayout>
        <InnerBanner image={about} title="About" />
        <MDBContainer breakpoint="md" className="text-center py-5 w-75">
          <MDBTypography className=" mb-4">
            Toys Universe is India's finest and most trusted Educational toys
            manufacturing brand. Our main objective is to engage kids in
            learning something new with our products. Educational toys can help
            kids boost their IQ, Enhances the development of their senses &
            Improved Concentration. Kids can Learn while playing. We put our
            efforts into making educational toys which can help kids learn while
            they play.
          </MDBTypography>
          <MDBTypography className="mb-0">
            We are always looking for new innovations in our products which can
            satisfy parents as well as kids. We are continually adding new
            innovative products in our portfolio and growing. We always look for
            customers' feedback so that we can improve our products that can
            satisfy the needs of parents for their kids.
          </MDBTypography>
        </MDBContainer>
      </PageLayout>
    </>
  );
};

export default AboutPage;
