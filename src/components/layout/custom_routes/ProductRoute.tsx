import React from 'react';
import { Route } from 'react-router-dom';
import Product from '../../../pages/Product';

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
