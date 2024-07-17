import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAN20WXdDyCRHNw7A6mVYFtbizsKqYHhRQ",
  authDomain: "unimemo-jewelry.firebaseapp.com",
  projectId: "unimemo-jewelry",
  storageBucket: "unimemo-jewelry.appspot.com",
  messagingSenderId: "944068679491",
  appId: "1:944068679491:web:4367c2ee1f58ecc05ac1f6"
};
const app = initializeApp(firebaseConfig);
const projectAuth = getAuth(app);
const projectFirestore = getFirestore(app);

export { projectFirestore as a, projectAuth as p };
