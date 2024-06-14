// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7UPYFaBhkaFZ-HSF_gmECZB9_o3YqEXw",
  authDomain: "tasker-ac1a8.firebaseapp.com",
  projectId: "tasker-ac1a8",
  storageBucket: "tasker-ac1a8.appspot.com",
  messagingSenderId: "977921921563",
  appId: "1:977921921563:web:d561905bb2cd5833ff9ebe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);