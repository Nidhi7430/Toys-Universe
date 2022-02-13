import {
  Card,
  CardContent,
  CardHeader,
  Step,
  StepLabel,
  Stepper,
} from '@mui/material';
import React, { useState } from 'react';
import { EMPTY_PRODUCT, STEPS } from '../../constants';
import { IProduct } from '../../types';
import Done from './Done';
import PreviewProduct from './PreviewProduct';
import ProductDetail from './ProductDetail';
import UploadImage from './UploadImage';

const AddProductCard: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [product, setProduct] = useState<IProduct<File>>(EMPTY_PRODUCT);

  return (
    <Card sx={{ minWidth: '350px', width: '500px' }}>
      <CardHeader title="Add Product" />
      <CardContent>
        <Stepper alternativeLabel>
          {STEPS.map((step, index) => (
            <Step key={index} active={index === activeStep}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </CardContent>
      {(() => {
        switch (STEPS[activeStep]) {
          case 'Add Details':
            return (
              <ProductDetail
                product={product}
                setProduct={setProduct}
                setActiveStep={setActiveStep}
              />
            );
          case 'Upload Images':
            return (
              <UploadImage
                product={product}
                setProduct={setProduct}
                setActiveStep={setActiveStep}
              />
            );
          case 'Preview':
            return (
              <PreviewProduct product={product} setActiveStep={setActiveStep} />
            );
          case 'Done':
            return <Done setActiveStep={setActiveStep} />;
        }
      })()}
    </Card>
  );
};

export default AddProductCard;
