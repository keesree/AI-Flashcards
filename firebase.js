// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpo_krM_Dz14jhSJ4AeRFmjpLOS1ABdnU",
  authDomain: "ai-flashcards-2a128.firebaseapp.com",
  projectId: "ai-flashcards-2a128",
  storageBucket: "ai-flashcards-2a128.appspot.com",
  messagingSenderId: "838028925423",
  appId: "1:838028925423:web:15c1c783cfffbcfb307e1a",
  measurementId: "G-3C2KYNL3R2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);