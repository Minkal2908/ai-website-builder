// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ai-website-builder-2ad14.firebaseapp.com",
  projectId: "ai-website-builder-2ad14",
  storageBucket: "ai-website-builder-2ad14.firebasestorage.app",
  messagingSenderId: "418107187654",
  appId: "1:418107187654:web:55a880d417b38cd618d2c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}
