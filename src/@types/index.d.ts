// Base Product
export interface IBaseProduct<T> {
  name: string;
  description: string;
  price: number;
  tags: string[];
  images: T[];
}

// Product from Firestore
export interface IProduct extends IBaseProduct<string> {
  id: string;
}

// New Product
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface INewProduct extends IBaseProduct<File> {}
