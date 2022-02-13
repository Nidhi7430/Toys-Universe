export interface IProduct<T> {
  name: string;
  description: string;
  price: number;
  tags: string[];
  images: T[] | T[];
}
