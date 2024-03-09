import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDO64VdPLfXGz3Ddrr3M3-xY3FZZRoU_mo",
  authDomain: "e-garbage-501fa.firebaseapp.com",
  projectId: "e-garbage-501fa",
  storageBucket: "e-garbage-501fa.appspot.com",
  messagingSenderId: "945100310428",
  appId: "1:945100310428:web:919b40118eabe6025baa59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const udb = getFirestore(app);
export const auth = getAuth(app);
