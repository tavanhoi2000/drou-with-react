import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore, collection } from "firebase/firestore";
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
  databaseURL: "https://drou-80fe6-default-rtdb.firebaseio.com/",
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);
const db = getFirestore(app);
const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();
const FacebookProvider = new FacebookAuthProvider();
const cartItemCollection = collection(db, "cartItem");
const productCollection = collection(db, "products");
const CategoryCollection = collection(db, "categories")
const FeedbackCollection = collection(db, "feedback")

export {
  auth,
  db,
  cartItemCollection,
  productCollection,
  GoogleProvider,
  GithubProvider,
  FacebookProvider,
  CategoryCollection,
  FeedbackCollection
};
