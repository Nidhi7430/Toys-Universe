import {
  Button,
  CardActions,
  CardContent,
  Chip,
  CircularProgress,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Product } from '../../services/product';
import { IProduct } from '../../types';
import Slideshow from '../Slideshow';

const PreviewProduct: React.FC<{
  product: IProduct<File | string>;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}> = ({ product, setActiveStep }) => {
  const [loading, setLoading] = useState(false);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const handleUpload = async () => {
    // show loading icon
    setLoading(true);
    // set Product
    const productInstance = new Product(product);
    // start uploading data to cloud
    await productInstance.add();
    // hide loading icon
    setLoading(false);
    // move to next step
    setActiveStep(3);
  };

  useEffect(() => {
    setImageUrls(
      product.images.map((image) => {
        if (image instanceof File) {
          return URL.createObjectURL(image);
        }
        return image;
      })
    );
  }, [product]);

  return (
    <>
      <CardContent>
        <Slideshow images={imageUrls} />
        <Typography variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="h5">₹ {product.price}</Typography>
        <Typography variant="body1">{product.description}</Typography>
        {product.tags.map((tag, index) => (
          <Chip key={index} sx={{ mr: 1 }} label={tag} color="success" />
        ))}
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Button onClick={() => setActiveStep(1)}>Back</Button>
        <Button variant="contained" onClick={() => handleUpload()}>
          {loading ? (
            <CircularProgress size="1.5em" color="inherit" />
          ) : (
            'Upload'
          )}
        </Button>
      </CardActions>
    </>
  );
};

export default PreviewProduct;
