import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1DW4HNBsjZoRRy2tm5Fd3gq2IFisAu7I",
  authDomain: "reversewordle-c90bb.firebaseapp.com",
  projectId: "reversewordle-c90bb",
  storageBucket: "reversewordle-c90bb.firebasestorage.app",
  messagingSenderId: "912945406275",
  appId: "1:912945406275:web:ea7b37e9e36b1b88e74ff6",
  measurementId: "G-HL7MVET68G"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
