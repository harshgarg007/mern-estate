// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-c04b0.firebaseapp.com",
  projectId: "mern-estate-c04b0",
  storageBucket: "mern-estate-c04b0.appspot.com",
  messagingSenderId: "647440017179",
  appId: "1:647440017179:web:e9292de651be6fc70595be"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);