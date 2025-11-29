// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALXteMkZD3UncjpT1TzFItghfWqumC89o",
  authDomain: "portrait-b960b.firebaseapp.com",
  projectId: "portrait-b960b",
  storageBucket: "portrait-b960b.firebasestorage.app",
  messagingSenderId: "197836500715",
  appId: "1:197836500715:web:45609be20d72fa924158ae",
  measurementId: "G-T3BYNF2WYE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Export Firestore
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
