import { Container } from '@mui/material';
import React from 'react';
import AboutSection from '../components/AboutSection';
import Heading from '../components/Heading';
import PageLayout from '../components/layout/page_layout/PageLayout';
import ProductGrid from '../components/ProductGrid';

const Home: React.FC = () => {
  return (
    <>
      <PageLayout>
        {/* <Slideshow images={slideShowImages} autoplay={5000} /> */}

        <Container maxWidth="xl">
          <Heading text="our products" />
          <ProductGrid count={4} />
        </Container>

        <Container maxWidth="xl">
          <Heading text="about" />
          <AboutSection />
        </Container>
      </PageLayout>
    </>
  );
};

export default Home;
