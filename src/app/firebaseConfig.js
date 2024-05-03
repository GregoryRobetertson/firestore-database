// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqaoGDsS6yB7bCgVH2f4sqzrQJnqGqelA",
  authDomain: "database-d12e1.firebaseapp.com",
  projectId: "database-d12e1",
  storageBucket: "database-d12e1.appspot.com",
  messagingSenderId: "172846347563",
  appId: "1:172846347563:web:2f6531f0c0cf9cef0b416e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};