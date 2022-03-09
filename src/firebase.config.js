import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChqXlHlt0xGRgdEPiTvl0w9nZlKKvQFfU",
  authDomain: "house-marketplace-5b75d.firebaseapp.com",
  projectId: "house-marketplace-5b75d",
  storageBucket: "house-marketplace-5b75d.appspot.com",
  messagingSenderId: "272206180",
  appId: "1:272206180:web:c1047b5dd09ae65f451271",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
