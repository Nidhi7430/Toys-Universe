import { IProduct } from '../types';

export const COLLECTION = {
  PRODUCT: 'products',
};

export const STEPS: ('Add Details' | 'Upload Images' | 'Preview' | 'Done')[] = [
  'Add Details',
  'Upload Images',
  'Preview',
  'Done',
];

export const EMPTY_PRODUCT: IProduct<File> = {
  name: '',
  description: '',
  price: 0,
  tags: [],
  images: [],
};
