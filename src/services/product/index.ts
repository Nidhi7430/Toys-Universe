import {
  addDoc,
  collection,
  DocumentData,
  DocumentReference,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { COLLECTION } from '../../constants';
import { IProduct } from '../../types';
import { db, storage } from '../Firebase';

export const fetchAllProduct = async () => {
  const data: Product[] = [];
  const querySnapshot = await getDocs(collection(db, COLLECTION.PRODUCT));
  querySnapshot.forEach((doc) =>
    data.push(new Product(doc.data() as IProduct<string>))
  );
  return data;
};

export const ClassFactoryFunction = <T extends object>() => {
  return class {
    constructor(t: T) {
      Object.assign(this, t);
    }
  } as { new (t: T): T };
};

export class Product extends ClassFactoryFunction<IProduct<string | File>>() {
  private uploadImages = async (file: File): Promise<string> => {
    // TODO no reject statement
    return new Promise(async (resolve, reject) => {
      const pictures = ref(storage, `products/${file.name}`);
      const data = await uploadBytes(pictures, file);
      const url = await getDownloadURL(data.ref);
      resolve(url);
    });
  };

  public add = async (): Promise<DocumentReference<DocumentData>> => {
    return new Promise(async (resolve, reject) => {
      try {
        console.log('Add product into Firestore...');
        const docRef = await addDoc(collection(db, 'products'), {
          name: this.name,
          description: this.description,
          price: this.price,
          tags: this.tags,
        });
        console.log('Upload images...');
        const ImageRefs = await Promise.all(
          (this.images as File[]).map(
            async (image) => await this.uploadImages(image)
          )
        );
        console.log('Add image url to product...');
        await updateDoc(docRef, {
          images: ImageRefs,
        });
        console.log('Done...');
        resolve(docRef);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  };
}
