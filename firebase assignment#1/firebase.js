import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword ,onAuthStateChanged, sendEmailVerification, signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBQpL8BaJF2BHr4dEY6kO_fTIICvhT0jxs",
    authDomain: "authentication-95b0d.firebaseapp.com",
    projectId: "authentication-95b0d",
    storageBucket: "authentication-95b0d.firebasestorage.app",
    messagingSenderId: "447018578915",
    appId: "1:447018578915:web:d3ad3907d13dafcc6be6d6",
    measurementId: "G-21XTT3TS03"
  };
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth ,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signOut }