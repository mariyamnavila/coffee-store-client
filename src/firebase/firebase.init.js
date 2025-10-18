// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZOhNj1d94d1Qby8fsd-eb7G1vRPF_jf0",
  authDomain: "coffee-store-app-1d9b0.firebaseapp.com",
  projectId: "coffee-store-app-1d9b0",
  storageBucket: "coffee-store-app-1d9b0.firebasestorage.app",
  messagingSenderId: "1004432104083",
  appId: "1:1004432104083:web:07e632d8b44b23cee88b66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);