import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "mi-zona-webbb.firebaseapp.com",
  projectId: "mi-zona-webbb",
  storageBucket: "mi-zona-webbb.firebasestorage.app",
  messagingSenderId: "118606465797",
  appId: "1:118606465797:web:bae262464d9a627505c56c"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
