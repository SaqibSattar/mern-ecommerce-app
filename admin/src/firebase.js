// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcVBFb35U4iHwk9pGzlCukxDwG9hvx5Fk",
  authDomain: "mern-ecommerce-cf6ce.firebaseapp.com",
  projectId: "mern-ecommerce-cf6ce",
  storageBucket: "mern-ecommerce-cf6ce.appspot.com",
  messagingSenderId: "832243206729",
  appId: "1:832243206729:web:9e217ca616a572a5b88d98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
