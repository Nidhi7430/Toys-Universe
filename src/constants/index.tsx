import React from 'react';
import {
  Category,
  Home,
  LocalOffer,
  Person,
  Settings,
} from '@mui/icons-material';
import { INewProduct } from '../types';

export const TITLE = 'ToysUniverse';

export const PAGES: { label: string; link: string; icon: JSX.Element }[] = [
  {
    label: 'home',
    link: '/',
    icon: <Home />,
  },
  // {
  //   label: 'category',
  //   link: '',
  //   icon: <Category />,
  // },
  // {
  //   label: 'deals',
  //   link: '',
  //   icon: <LocalOffer />,
  // },
  // {
  //   label: 'admin',
  //   link: '/admin',
  //   icon: <Settings />,
  // },
];

export const COLLECTION = {
  PRODUCT: 'products',
};

export const STEPS: ('Add Details' | 'Upload Images' | 'Preview' | 'Done')[] = [
  'Add Details',
  'Upload Images',
  'Preview',
  'Done',
];

export const EMPTY_PRODUCT: INewProduct = {
  name: '',
  description: '',
  price: 0,
  tags: [],
  images: [],
};
