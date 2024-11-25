// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0TakLWGfA6C22r2JU4T3iMQVl59hK4WQ",
  authDomain: "chepchat-eec93.firebaseapp.com",
  projectId: "chepchat-eec93",
  storageBucket: "chepchat-eec93.firebasestorage.app",
  messagingSenderId: "277566977323",
  appId: "1:277566977323:web:d2a234eee23354a39d416e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
