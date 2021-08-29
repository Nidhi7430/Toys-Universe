import React from 'react';
import InnerBanner from '../../components/inner_banner/InnerBanner';
import about from '../../images/about.webp';
import { MDBTypography, MDBContainer } from 'mdb-react-ui-kit';
import { PageLayout } from '../../components/page_layout/PageLayout';

const AboutPage = () => {
  return (
    <PageLayout>
      <InnerBanner image={about} title="About" />
      <MDBContainer className="text-center py-5 w-75">
        <MDBTypography className=" mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book.
        </MDBTypography>
        <MDBTypography className="mb-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book.
        </MDBTypography>
      </MDBContainer>
    </PageLayout>
  );
};

export default AboutPage;
