// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAN20WXdDyCRHNw7A6mVYFtbizsKqYHhRQ",
    authDomain: "unimemo-jewelry.firebaseapp.com",
    projectId: "unimemo-jewelry",
    storageBucket: "unimemo-jewelry.appspot.com",
    messagingSenderId: "944068679491",
    appId: "1:944068679491:web:4367c2ee1f58ecc05ac1f6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const projectAuth = getAuth(app);

export const projectFirestore = getFirestore(app);
