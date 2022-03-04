import { ArrowBack, ArrowForward, Circle } from '@mui/icons-material';
import { Box, Container, IconButton, Skeleton } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Slideshow: React.FC<{ images: string[]; autoplay?: number }> = ({
  images = [],
  autoplay = 0,
}) => {
  const [counter, setCounter] = useState(0);

  const handleLeftButton = () => {
    if (counter === 0) {
      setCounter(images.length);
    } else {
      setCounter(counter - 1);
    }
  };

  const handleRightButton = () => {
    if (counter === images.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  useEffect(() => {
    autoplay && setTimeout(handleRightButton, autoplay);
  }, [counter, autoplay]);

  if (images.length === 0)
    return <Skeleton variant="rectangular" sx={{ height: '15em' }} />;
  return (
    <>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '10em',
          background: `no-repeat center/contain url(${images[counter]})`,
        }}
      >
        {images.length > 1 && (
          <>
            <IconButton onClick={handleLeftButton}>
              <ArrowBack />
            </IconButton>

            <IconButton onClick={handleRightButton}>
              <ArrowForward />
            </IconButton>
          </>
        )}
      </Container>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}
      >
        {images.length >= 1
          ? images.map((image, index) => (
              <Circle
                key={index}
                sx={{ fontSize: '0.5em' }}
                color={index === counter ? 'inherit' : 'disabled'}
              />
            ))
          : null}
      </Box>
    </>
  );
};

export default Slideshow;
