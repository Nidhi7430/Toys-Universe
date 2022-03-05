import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { IProduct } from '../@types';
import AboutSection from '../components/AboutSection';
import Heading from '../components/Heading';
import PageLayout from '../components/layout/page_layout/PageLayout';
import api from '../services/axios';

const Home: React.FC = () => {
  const [data, setData] = useState([]);

  const getProducts = async () => {
    const res = await api.get('/product');
    setData(res.data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <PageLayout>
        {/* <Slideshow images={slideShowImages} autoplay={5000} /> */}

        <Container maxWidth="xl">
          <Heading text="our products" />
          {data.map((e: IProduct) => (
            <div key={e.id}>
              <p>{e.name}</p>
              <p>{e.description}</p>
              <p>{e.price}</p>
              <button>add to cart</button>
              <hr />
            </div>
          ))}
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
