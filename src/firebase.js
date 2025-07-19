// src/firebase.js (or src/firebase.ts)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics"; // Optional, if you want to use Analytics

// Your NEW web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9hrJA077mJFphO-bPi1D_KANKZS5Hufk",
  authDomain: "dev-kansara.firebaseapp.com",
  projectId: "dev-kansara",
  storageBucket: "dev-kansara.firebasestorage.app",
  messagingSenderId: "590161949236",
  appId: "1:590161949236:web:480e9eb921236989321061",
  measurementId: "G-TXGWB32MQ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Analytics (optional)
const analytics = getAnalytics(app);

// Export db and app so you can use them in other files
export { db, app, analytics };
