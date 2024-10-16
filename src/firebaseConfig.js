
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC3p37v6VALTZ9IAweiHSW-iSUAvTNZ8R4",
  authDomain: "invoice-builder-22d9f.firebaseapp.com",
  projectId: "invoice-builder-22d9f",
  storageBucket: "invoice-builder-22d9f.appspot.com",
  messagingSenderId: "319811887862",
  appId: "1:319811887862:web:81f9f212181e46b03f82d7",
  measurementId: "G-3TPGXH40WZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage()
export const db =  getFirestore(app)