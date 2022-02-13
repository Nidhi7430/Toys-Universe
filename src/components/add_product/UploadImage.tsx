import { Button, CardContent, CardActions } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { IProduct } from '../../types';
import ImageUploader from '../ImageUploader';

const UploadImage: React.FC<{
  product: IProduct<File>;
  setProduct: React.Dispatch<React.SetStateAction<IProduct<File>>>;
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
