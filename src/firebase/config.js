import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";


// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyC3P8EaOowQiBPo6_k2IMNw3IYPuyBLs_s",
  authDomain: "therapy-board.firebaseapp.com",
  projectId: "therapy-board",
  storageBucket: "therapy-board.appspot.com",
  messagingSenderId: "882730809007",
  appId: "1:882730809007:web:b9318d2f7a4a791bd2465a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()