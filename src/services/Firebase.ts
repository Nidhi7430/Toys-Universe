import { FirebaseOptions, initializeApp } from 'firebase/app';
import {
  connectAuthEmulator,
  getAuth,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
};

export const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
connectAuthEmulator(auth, 'http://localhost:9099');

export const provider = new GoogleAuthProvider();

// export const storage = getStorage(firebaseApp);
// connectStorageEmulator(storage, 'localhost', 9199);

// export const db = getFirestore(firebaseApp);
// connectFirestoreEmulator(db, 'localhost', 8080);

// ! for offline support
// enableIndexedDbPersistence(db).catch((err) => {
//   console.log(err.code);
//   if (err.code === 'failed-precondition') {
//     // Multiple tabs open, persistence can only be enabled
//     // in one tab at a a time.
//     console.log('failed preconditions');
//     // ...
//   } else if (err.code === 'unimplemented') {
//     // The current browser does not support all of the
//     // features required to enable persistence
//     // ...
//   }
// });
