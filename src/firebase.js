// src/firebase.js (or src/firebase.ts)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics"; // Optional, if you want to use Analytics

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBipHRxuqyGDH7oP-XigiDJ5x4uMwRPMyE",
  authDomain: "portfolio-31777.firebaseapp.com",
  projectId: "portfolio-31777",
  storageBucket: "portfolio-31777.firebasestorage.app",
  messagingSenderId: "868592233794",
  appId: "1:868592233794:web:0eeb3f8dae149996eeacdb",
  measurementId: "G-HHGHGVXM1L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Analytics (optional)
const analytics = getAnalytics(app);

// Export db and app so you can use them in other files
export { db, app, analytics };
