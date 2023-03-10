// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjm0gMzSMTa3ZkmkhtNipKT-DCvNDnbsE",
  authDomain: "netflix-react-fc52c.firebaseapp.com",
  projectId: "netflix-react-fc52c",
  storageBucket: "netflix-react-fc52c.appspot.com",
  messagingSenderId: "400962112715",
  appId: "1:400962112715:web:d8fd065c985e3f8833df4e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
