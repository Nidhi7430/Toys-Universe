import React from 'react';
import { Home } from '@mui/icons-material';

export const TITLE = 'ToysUniverse';

export const PAGES: { label: string; link: string; icon: JSX.Element }[] = [
  {
    label: 'home',
    link: '/',
    icon: <Home />,
  },
];

export const COLLECTION = {
  PRODUCT: 'products',
};
