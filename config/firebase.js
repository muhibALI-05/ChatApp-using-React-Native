import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCPUyIA3lqi2_7savRwkodfZ8auSylYTbQ",
  authDomain: "chatapp-86adc.firebaseapp.com",
  projectId: "chatapp-86adc",
  storageBucket: "chatapp-86adc.appspot.com",
  messagingSenderId: "557223001622",
  appId: "1:557223001622:web:81a88603c7a2ff652e3f37"
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
