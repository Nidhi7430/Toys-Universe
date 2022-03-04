import { Cancel } from '@mui/icons-material';
import { Stack, Button, Typography, Alert } from '@mui/material';
import React, { useRef, useState } from 'react';
import { Input } from '../../custom_styled_components/Input';

const ImageUploader: React.FC<{
  limit: number;
  images: File[];
  setImages: React.Dispatch<React.SetStateAction<File[]>>;
}> = ({ limit, images, setImages }) => {
  const [error, setError] = useState({
    show: false,
    message: '',
  });

  const inputRef = useRef<HTMLInputElement>(null);

  const removeImage = (index: number) => {
    const remainingImages = images.filter((image, idx) => idx !== index);
    setImages(remainingImages);
  };

  const handleFileInput = (e: React.BaseSyntheticEvent) => {
    const fileList = e.target.files;
    if (fileList && fileList[0] && fileList[0].size / 1024 <= limit) {
      setImages((prevImages) => [...prevImages, fileList[0]]);
      setError({
        show: false,
        message: '',
      });
    } else {
      setError({
        show: true,
        message: 'Invalid Image file. Please upload image below 500kb',
      });
    }
    if (inputRef && inputRef.current) {
      inputRef.current.value = '';
    }
  };
  return (
    <>
      {error.show ? <Alert severity="error">{error.message}</Alert> : null}

      <Stack
        direction="row"
        justifyContent="flex-start"
        sx={{ my: 1, flexWrap: 'wrap' }}
      >
        {images.map((image, index) => (
          <Button
            key={index}
            sx={{
              height: 100,
              width: 100,
              margin: 1,
              border: '0.15em dashed',
              background: `no-repeat center/contain url(${URL.createObjectURL(
                image as File
              )})`,
            }}
          >
            <Cancel
              color="error"
              sx={{ position: 'absolute', top: -10, right: -10 }}
              onClick={() => removeImage(index)}
            />
          </Button>
        ))}
        <label htmlFor="upload-button" style={{ margin: 0 }}>
          <Input
            accept="image/*"
            id="upload-button"
            type="file"
            onChange={handleFileInput}
            ref={inputRef}
          />
          <Button
            component="span"
            sx={{
              height: 100,
              width: 100,
              margin: 1,
              border: '0.15em dashed',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography sx={{ fontSize: 50 }}>+</Typography>
          </Button>
        </label>
      </Stack>
    </>
  );
};

export default ImageUploader;
