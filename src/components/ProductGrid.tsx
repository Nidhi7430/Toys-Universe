import { Grid, Skeleton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { fetchProducts, Product } from '../services/product';
import ProductCard from './ProductCard';

const ProductGrid: React.FC<{ count: number }> = ({ count }) => {
  const [data, setData] = useState<Product[]>([]);

  const getData = async () => {
    const data = await fetchProducts(count);
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Grid container spacing={3} alignItems="stretch">
        {data.length === 0 ? (
          <Skeleton variant="rectangular" height={100} />
        ) : (
          data.map((item, index) => (
            <Grid key={index} item xs={12} sm={4} md={4} lg={3}>
              <ProductCard product={item} />
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
};

export default ProductGrid;
