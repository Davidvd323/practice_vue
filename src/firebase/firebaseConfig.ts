// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyByuDoa17irPQIOBWwBvO4FFUHpPbqHp4o",
  authDomain: "todoapp-89801.firebaseapp.com",
  projectId: "todoapp-89801",
  storageBucket: "todoapp-89801.appspot.com",
  messagingSenderId: "963252581310",
  appId: "1:963252581310:web:8811e17655f034cbc6ffef",
};

export const initializeFirebase = initializeApp(firebaseConfig);
