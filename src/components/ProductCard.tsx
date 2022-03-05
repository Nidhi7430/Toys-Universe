import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import React, { useContext } from 'react';
import { IProduct } from '../@types';

const ProductCard: React.FC<{ product: IProduct }> = ({ product }) => {
  // const { user } = useContext(AuthContext);
  // const { addToCart } = useContext(CartContext);
  // const handleAddToCart = () => {
  //   addToCart(product);
  // };
  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            {product.name || 'Invalid'}
          </Typography>
          <Typography>₹ {product.price || 'Invalid'}</Typography>
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
