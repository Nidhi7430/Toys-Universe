import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { fetchAllProduct, Product } from '../services/product';
import ProductCard from './ProductCard';

const ProductGrid: React.FC = () => {
  const [data, setData] = useState<Product[]>([]);

  const getData = async () => {
    const data = await fetchAllProduct();
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductGrid;
