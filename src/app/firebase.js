
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAaUCxJSl93y5aE04UQ0T2lTBKOYU625wM",
  authDomain: "login-806e8.firebaseapp.com",
  projectId: "login-806e8",
  storageBucket: "login-806e8.firebasestorage.app",
  messagingSenderId: "173601134654",
  appId: "1:173601134654:web:78f70f6b33d044af73596f",
  measurementId: "G-0CQ7RDH95F"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

const analytics = getAnalytics(app);