import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4wWu_i7bFQXQ4DI4j3RBCrgjk0M8PDX8",
  authDomain: "netflixapp-7fe32.firebaseapp.com",
  projectId: "netflixapp-7fe32",
  storageBucket: "netflixapp-7fe32.appspot.com",
  messagingSenderId: "46034999025",
  appId: "1:46034999025:web:bdb969d706ab79f2c1bb50",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
