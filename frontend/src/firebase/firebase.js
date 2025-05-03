import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Use process.env.REACT_APP_ to access your Firebase config in React
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
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

export { auth, db, signInWithGoogle, signOutUser };
