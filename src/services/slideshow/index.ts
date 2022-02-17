import { collection, getDoc, getDocs } from 'firebase/firestore';
import {
  getBytes,
  getDownloadURL,
  listAll,
  ref,
  uploadBytes,
} from 'firebase/storage';
import { storage } from '../Firebase';

export const uploadSliderImages = async (imageFile: File) => {
  const pictures = ref(storage, `slideshow/${imageFile.name}`);
  const data = await uploadBytes(pictures, imageFile);
  const url = await getDownloadURL(data.ref);
  return url;
};

export const fetchAllSliderImages = async (): Promise<string[]> => {
  const listRef = ref(storage, 'slideshow');
  const listImage = await listAll(listRef);
  const data = await Promise.all(
    listImage.items.map(async (item) => await getDownloadURL(item))
  );
  return data;
};
