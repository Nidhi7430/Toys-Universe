import { Container } from '@mui/material';
import React from 'react';
import ProductGrid from '../components/ProductGrid';
import Slideshow from '../components/Slideshow';

const Home: React.FC = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Slideshow
          images={[
            'http://localhost:9199/v0/b/auth-test-72672.appspot.com/o/products%2Fcropped-666393196.003650.jpg?alt=media&token=f969bcf6-bba3-4f2e-aaef-be809b15baf4',
            'http://localhost:9199/v0/b/auth-test-72672.appspot.com/o/products%2FIMG_0801_PR.jpg?alt=media&token=85c75ae7-23b9-4b90-8561-aedaa6359090',
          ]}
        />
        <ProductGrid />
      </Container>
    </>
  );
};

export default Home;
