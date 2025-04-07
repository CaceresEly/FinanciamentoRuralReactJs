// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDS-ZVWZ5Wu4eIu9ZnO-c56Cy2QKO8l0o0",
    authDomain: "controlefinanceirorural.firebaseapp.com",
    projectId: "controlefinanceirorural",
    storageBucket: "controlefinanceirorural.firebasestorage.app",
    messagingSenderId: "524199735174",
    appId: "1:524199735174:web:0255b7ebc33ae8e23fc607",
    measurementId: "G-7VCHYD8Z3Y"
  };;

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
