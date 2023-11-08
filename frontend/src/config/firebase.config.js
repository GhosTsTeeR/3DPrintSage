// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBgHDESNSjckJR8OUUwRbKhTQNJBM9-I9w",
  authDomain: "dprintsage.firebaseapp.com",
  projectId: "dprintsage",
  storageBucket: "dprintsage.appspot.com",
  messagingSenderId: "288140944399",
  appId: "1:288140944399:web:729383e3e96234a6d82f7a",
  measurementId: "G-HGWC1P0NDY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);