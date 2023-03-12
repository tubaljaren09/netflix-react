// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRZxkP1-REW3tzOGtlqRphB74KchCc_6M",
  authDomain: "netflix-react-7a1c0.firebaseapp.com",
  projectId: "netflix-react-7a1c0",
  storageBucket: "netflix-react-7a1c0.appspot.com",
  messagingSenderId: "459698075304",
  appId: "1:459698075304:web:c3ff99339d22eb23b5f49d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
