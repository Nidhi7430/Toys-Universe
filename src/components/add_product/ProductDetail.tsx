import {
  FormControl,
  TextField,
  InputAdornment,
  Stack,
  Chip,
  CardContent,
  Button,
  CardActions,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { IProduct } from '../../types';

const ProductDetail: React.FC<{
  product: IProduct<File>;
  setProduct: React.Dispatch<React.SetStateAction<IProduct<File>>>;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}> = ({ product, setProduct, setActiveStep }) => {
  const [disabledNext, setDisabledNext] = useState(true);

  const deleteTag = (index: number) => {
    const remainingTags = product.tags.filter(
      (tag) => product.tags[index] !== tag
    );
    setProduct({ ...product, tags: remainingTags });
  };

  const addTag = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const input_text = (e.target as HTMLInputElement).value.trim();
    if (input_text !== '' && product.tags.indexOf(input_text) === -1) {
      setProduct({ ...product, tags: [...product.tags, input_text] });
    }
    (e.target as HTMLInputElement).value = '';
  };

  useEffect(() => {
    if (
      product.name !== '' &&
      product.description !== '' &&
      product.price !== 0 &&
      product.tags.length !== 0
    ) {
      setDisabledNext(false);
    }
  }, [product]);

  return (
    <>
      <CardContent>
        <FormControl fullWidth sx={{ my: 3 }}>
          <TextField
            margin="normal"
            label="Product Name"
            variant="outlined"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            error={product.name === ''}
          />
          <TextField
            margin="normal"
            label="Description"
            variant="outlined"
            value={product.description}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
            error={product.description === ''}
          />
          <TextField
            margin="normal"
            label="Price"
            type="number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">₹</InputAdornment>
              ),
            }}
            variant="outlined"
            onChange={(e) =>
              setProduct({ ...product, price: Number(e.target.value) })
            }
            value={product.price}
            error={product.price === 0}
          />
          <TextField
            margin="normal"
            variant="outlined"
            disabled={product.tags.length >= 5}
            onKeyUp={(event) =>
              [' ', 'Enter'].includes(event.key) ? addTag(event) : null
            }
            placeholder={product.tags.length < 5 ? 'Enter tags' : ''}
            error={product.tags.length === 0}
            InputProps={{
              startAdornment: (
                <Stack direction="row">
                  {product.tags.map((data, index) => (
                    <Chip
                      key={index}
                      sx={{ m: 1 }}
                      size="small"
                      color="success"
                      label={data}
                      onDelete={() => deleteTag(index)}
                    />
                  ))}
                </Stack>
              ),
            }}
          />
        </FormControl>
      </CardContent>
      <CardActions sx={{ justifyContent: 'end' }}>
        <Button
          variant="contained"
          disabled={disabledNext}
          // onClick moves to next STEP which is 1
          onClick={() => setActiveStep(1)}
        >
          Next
        </Button>
      </CardActions>
    </>
  );
};

export default ProductDetail;
