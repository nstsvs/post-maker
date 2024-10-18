import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBN5i7QsY4KMLPbRKHeDZ9DmcCySwJseXk",
  authDomain: "online-store-4f72e.firebaseapp.com",
  databaseURL: "https://online-store-4f72e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "online-store-4f72e",
  storageBucket: "online-store-4f72e.appspot.com",
  messagingSenderId: "417399381726",
  appId: "1:417399381726:web:5b266426b4f98bae7c6c4f",
  measurementId: "G-J8NCMFE2RD"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
