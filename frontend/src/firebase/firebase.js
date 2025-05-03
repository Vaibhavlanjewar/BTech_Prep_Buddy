// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpx0S6U21o46jD44JO19H0_DIX6qWvFiM",
  authDomain: "book-14d71.firebaseapp.com",
  projectId: "book-14d71",
  storageBucket: "book-14d71.appspot.com",
  messagingSenderId: "592182666400",
  appId: "1:592182666400:web:d0085d3a8f9f0b96e455c5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // ✅ Add this line
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  return signInWithPopup(auth, provider)
    .then((result) => result.user)
    .catch((error) => {
      console.error("Google Sign-In Error:", error.message);
      throw error;
    });
};

const signOutUser = () => {
  return signOut(auth)
    .then(() => console.log("Signed out"))
    .catch((error) => {
      console.error("Sign-Out Error:", error.message);
      throw error;
    });
};

export { auth, db, signInWithGoogle, signOutUser }; // ✅ Export `db`
