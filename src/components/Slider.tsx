import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from '@mui/material';
import React, { useState } from 'react';
import ImageUploader from './ImageUploader';

const Slider: React.FC = () => {
  const [images, setImages] = useState<File[]>([]);

  return (
    <>
      <Card sx={{ minWidth: '350px', width: '500px' }}>
        <CardHeader title="Add Images for Slideshow" />
        <CardContent>
          <ImageUploader limit={1024} images={images} setImages={setImages} />
        </CardContent>
        <CardActions sx={{ justifyContent: 'space-between' }}>
          <Button disabled></Button>
          <Button variant="contained">Upload</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Slider;
