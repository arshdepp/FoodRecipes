// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGxrlp9TqPNa3kX1xb5fisiG0fRBpzrjU",
  authDomain: "todo-16dbf.firebaseapp.com",
  projectId: "todo-16dbf",
  storageBucket: "todo-16dbf.appspot.com",
  messagingSenderId: "155818793757",
  appId: "1:155818793757:web:04ad0f3770196af5641ff4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);