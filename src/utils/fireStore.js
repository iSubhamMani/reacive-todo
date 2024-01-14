import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
