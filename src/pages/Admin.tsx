import { Button, Dialog } from '@mui/material';
import React, { useState } from 'react';
import AddProductCard from '../components/add_product/AddProductCard';
import PageLayout from '../components/PageLayout';
import SlideshowManager from '../components/SlideshowManager';

const Admin: React.FC = () => {
  const [openModel, setOpenModel] = useState(0);

  const handleClose = () => setOpenModel(0);
  return (
    <PageLayout>
      <Dialog open={openModel === 1} onClose={handleClose}>
        <AddProductCard />
      </Dialog>
      <Dialog open={openModel === 2} onClose={handleClose}>
        <SlideshowManager />
      </Dialog>
      <Button onClick={() => setOpenModel(1)}>Add new product</Button>
      <Button onClick={() => setOpenModel(2)}>Add images to slideshow</Button>
    </PageLayout>
  );
};

export default Admin;
