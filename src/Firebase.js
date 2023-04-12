// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAogLKmrYftXSblxSVYuj4QyCmcRNbO3Xo",
  authDomain: "plusone-1e120.firebaseapp.com",
  projectId: "plusone-1e120",
  storageBucket: "plusone-1e120.appspot.com",
  messagingSenderId: "218108583319",
  appId: "1:218108583319:web:b1f154230248efa12438d2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
