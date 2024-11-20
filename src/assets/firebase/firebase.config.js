// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrYmZDB3V6RSchB1LWJz_ME5zkR7yAstE",
  authDomain: "lingo-bingo-c5f2a.firebaseapp.com",
  projectId: "lingo-bingo-c5f2a",
  storageBucket: "lingo-bingo-c5f2a.firebasestorage.app",
  messagingSenderId: "1068245782450",
  appId: "1:1068245782450:web:ecb362a2ffb23407ed1eab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;