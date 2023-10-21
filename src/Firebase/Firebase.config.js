// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbtEfs78vQY_GrmiRBMbM6IyFgjkvvwaE",
  authDomain: "technology-shop-client.firebaseapp.com",
  projectId: "technology-shop-client",
  storageBucket: "technology-shop-client.appspot.com",
  messagingSenderId: "806508581414",
  appId: "1:806508581414:web:2d51383a23953fb722cce7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;

