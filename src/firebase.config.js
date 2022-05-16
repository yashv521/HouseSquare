// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestone} from  'firebase/firesstore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM30zUxJkD_Wss6oZNcXPxi8AmQgYjIQ4",
  authDomain: "housesquare-app.firebaseapp.com",
  projectId: "housesquare-app",
  storageBucket: "housesquare-app.appspot.com",
  messagingSenderId: "544151608179",
  appId: "1:544151608179:web:20c25b6ce8b606a6e1c306"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const db = getFsirestore()