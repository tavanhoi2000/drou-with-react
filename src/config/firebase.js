import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {
  getAuth,
  GithubAuthProvider,
  FacebookAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBrab-DB_sxwhyNLHyBZDy9L_sCTfgZadA",
  authDomain: "drou-80fe6.firebaseapp.com",
  projectId: "drou-80fe6",
  storageBucket: "drou-80fe6.appspot.com",
  messagingSenderId: "873401474299",
  appId: "1:873401474299:web:b82ac0fdfbb6744eae645e",
  measurementId: "G-26P40WR4DH",
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();
const FacebookProvider = new FacebookAuthProvider();

export { auth, GoogleProvider, GithubProvider, FacebookProvider };
