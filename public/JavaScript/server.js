// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG68k0Z2dA73HMrXk08nVxCjQ_kXJG4Ik",
  authDomain: "ralph-li-portfolio.firebaseapp.com",
  databaseURL: "https://ralph-li-portfolio-default-rtdb.firebaseio.com",
  projectId: "ralph-li-portfolio",
  storageBucket: "ralph-li-portfolio.appspot.com",
  messagingSenderId: "1007710292544",
  appId: "1:1007710292544:web:30a6bba4ad4efdd65a6da5",
  measurementId: "G-X4W7EQFN96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);