import React from 'react';
import { Route } from 'react-router-dom';
import Product from '../../../pages/Product';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductRoute: React.FC<any> = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        const product_id = props.location.pathname.replace('/product/', '');
        return <Product id={product_id} />;
      }}
    />
  );
};

export default ProductRoute;
