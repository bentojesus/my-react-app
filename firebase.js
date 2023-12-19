// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBr8xFdeYI7WXuzkA9jMShjksvSzHyRDGc",
  authDomain: "my-react-app-3e540.firebaseapp.com",
  projectId: "my-react-app-3e540",
  storageBucket: "my-react-app-3e540.appspot.com",
  messagingSenderId: "745523846656",
  appId: "1:745523846656:web:966d2018f302d0e62d82e5",
  measurementId: "G-6CH58B8NFE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);