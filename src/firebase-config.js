import { initializeApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
export let app = '';
try {
  app = getApp();
} catch (error) {
  app = initializeApp({
    apiKey: `${import.meta.env.REACT_FIREBASE_KEY}`,
    authDomain: "drag-and-drop-43a84.firebaseapp.com",
    projectId: "drag-and-drop-43a84",
    storageBucket: "drag-and-drop-43a84.appspot.com",
    messagingSenderId: "252241800260",
    appId: "1:252241800260:web:966f866f1fac8dd5572011"
  })
}

export const db = getFirestore();