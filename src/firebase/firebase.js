// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAqD6WHX4Lji851pf-JIKt2bVmq8xCDBgw",
  authDomain: "blogproject-7ade4.firebaseapp.com",
  projectId: "blogproject-7ade4",
  storageBucket: "blogproject-7ade4.firebasestorage.app",
  messagingSenderId: "239156875182",
  appId: "1:239156875182:web:24d797e03a149077e2423f",
  measurementId: "G-JM59Y7CQGD"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore(app)