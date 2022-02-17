import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from '@mui/material';
import React, { useState } from 'react';
import { uploadSliderImages } from '../services/slideshow';
import ImageUploader from './ImageUploader';

const SlideshowManager: React.FC = () => {
  const [images, setImages] = useState<File[]>([]);

  const handleUpload = async () => {
    Promise.all(
      images.map(async (image) => await uploadSliderImages(image))
    ).then(() => setImages([]));
  };
  return (
    <>
      <Card sx={{ minWidth: '350px', width: '500px' }}>
        <CardHeader title="Add Images for Slideshow" />
        <CardContent>
          <ImageUploader limit={1024} images={images} setImages={setImages} />
        </CardContent>
        <CardActions sx={{ justifyContent: 'space-between' }}>
          <Button disabled></Button>
          <Button variant="contained" onClick={handleUpload}>
            Upload
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default SlideshowManager;
