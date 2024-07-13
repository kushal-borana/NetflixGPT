// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "netflixgpt-3f768.firebaseapp.com",
  projectId: "netflixgpt-3f768",
  storageBucket: "netflixgpt-3f768.appspot.com",
  messagingSenderId: "415569222175",
  appId: "1:415569222175:web:fabdd9f0ccde7dfc6d532a",
  measurementId: "G-CRSJFSCXG4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();