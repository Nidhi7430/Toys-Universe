import React from 'react';
import PageLayout from '../components/layout/page_layout/PageLayout';

const Product: React.FC<{ id: string }> = ({ id }) => {
  return (
    <PageLayout>
      <div>{id}</div>
    </PageLayout>
  );
};

export default Product;
