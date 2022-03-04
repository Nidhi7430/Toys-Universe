import { Grid, Skeleton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { IProduct } from '../types';
import ProductCard from './ProductCard';

const ProductGrid: React.FC<{ count: number }> = () => {
  const [data, setData] = useState<IProduct[]>([]);

  const getData = async () => {
    // setData(data);
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
            <Grid key={index} item xs={6} sm={6} md={4} lg={3}>
              <ProductCard product={item} />
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
};

export default ProductGrid;
