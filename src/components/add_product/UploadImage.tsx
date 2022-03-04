import { Button, CardContent, CardActions } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { INewProduct, IProduct } from '../../types';
import ImageUploader from '../image_uploader/ImageUploader';

const UploadImage: React.FC<{
  product: INewProduct;
  setProduct: React.Dispatch<React.SetStateAction<INewProduct>>;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}> = ({
  // setDisable,
  product,
  setProduct,
  setActiveStep,
}) => {
  const [disabledNext, setDisabledNext] = useState(true);
  const [images, setImages] = useState<File[]>([]);

  const handleNext = () => {
    setProduct({ ...product, images: images });
    setActiveStep(2);
  };

  useEffect(() => {
    setDisabledNext(images.length === 0);
  }, [images.length]);

  return (
    <>
      <CardContent>
        <ImageUploader limit={512} images={images} setImages={setImages} />
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Button onClick={() => setActiveStep(0)}>Back</Button>
        <Button
          variant="contained"
          disabled={disabledNext}
          onClick={handleNext}
        >
          Next
        </Button>
      </CardActions>
    </>
  );
};

export default UploadImage;
