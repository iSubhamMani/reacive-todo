// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT4QitTLGEgobbN290b6p_iNovgG8U5jc",
  authDomain: "reactive-todo-defc8.firebaseapp.com",
  projectId: "reactive-todo-defc8",
  storageBucket: "reactive-todo-defc8.appspot.com",
  messagingSenderId: "126276517870",
  appId: "1:126276517870:web:b6352f317be91d07e1d8ff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
