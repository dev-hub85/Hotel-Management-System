import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCiEa6AVuxKbiSRq02iNdOZBSaOSgQ8qrk",
    authDomain: "hotelms-6c17c.firebaseapp.com",
    projectId: "hotelms-6c17c",
    storageBucket: "hotelms-6c17c.appspot.com",
    messagingSenderId: "406200893518",
    appId: "1:406200893518:web:ac0ef63ea9baa85c89831f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Get Firestore instance
const firestore = getFirestore(app);

export { firestore, auth,provider };
