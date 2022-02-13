import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import React from 'react';
import { Product } from '../services/product';
import Slideshow from './Slideshow';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <>
      <Card>
        <Slideshow images={product.images as string[]} />
        <CardContent>
          <Typography variant="h5" component="div">
            {product.name}
          </Typography>
          {/* <Typography variant="body1">
            {product.description.length > 100
              ? product.description.substring(0, 100) + '...'
              : product.description}
          </Typography> */}
          {/* {product.tags.map((tag: string, index: number) => (
            <Chip key={index} sx={{ mr: 1 }} label={tag} color="success" />
          ))} */}
          <Typography>₹ {product.price}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add to cart</Button>
          <Button size="small">Buy</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ProductCard;
