import { FirebaseOptions, initializeApp } from 'firebase/app';
import {
  connectAuthEmulator,
  getAuth,
  GoogleAuthProvider,
} from 'firebase/auth';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { connectStorageEmulator, getStorage } from 'firebase/storage';

const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyD2iRfd_JNSupWMIHKabquSX_nGR2dY-dc',
  authDomain: 'auth-test-72672.firebaseapp.com',
  projectId: 'auth-test-72672',
  storageBucket: 'auth-test-72672.appspot.com',
  // messagingSenderId: "1040230189198",
  // appId: "1:1040230189198:web:6044036ba13491779fe1df"
};

export const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
connectAuthEmulator(auth, 'http://localhost:9099');

export const provider = new GoogleAuthProvider();

export const storage = getStorage(firebaseApp);
connectStorageEmulator(storage, 'localhost', 9199);

export const db = getFirestore(firebaseApp);
connectFirestoreEmulator(db, 'localhost', 8080);

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
