// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDpTnH9CFBUYJtdUCqk01r_v4rp6BuZtEY",
    authDomain: "myshoppinglist-84d93.firebaseapp.com",
    databaseURL: "https://myshoppinglist-84d93-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "myshoppinglist-84d93",
    storageBucket: "myshoppinglist-84d93.firebasestorage.app",
    messagingSenderId: "65132875488",
    appId: "1:65132875488:web:c18a7b0d595d8dc4154a85"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//With this we can use a database itself!!!!!!!!!!!!
export const db = getDatabase(app);