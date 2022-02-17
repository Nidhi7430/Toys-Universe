import { Container, Skeleton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AboutSection from '../components/AboutSection';
import Heading from '../components/Heading';
import PageLayout from '../components/PageLayout';
import ProductGrid from '../components/ProductGrid';
import Slideshow from '../components/Slideshow';
import { fetchAllSliderImages } from '../services/slideshow';

const Home: React.FC = () => {
  const [slideShowImages, setSlideShowImages] = useState<string[]>([]);

  const getAllSliderImages = async () => {
    const data = await fetchAllSliderImages();
    setSlideShowImages(data);
  };

  useEffect(() => {
    getAllSliderImages();
  }, []);

  return (
    <>
      <PageLayout>
        <Slideshow images={slideShowImages} autoplay={5000} />

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
