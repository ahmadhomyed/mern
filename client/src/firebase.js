// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-78329.firebaseapp.com",
  projectId: "mern-78329",
  storageBucket: "mern-78329.appspot.com",
  messagingSenderId: "517205621296",
  appId: "1:517205621296:web:0a249deb9de3da0c3e8bf5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
