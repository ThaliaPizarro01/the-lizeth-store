import { getApp, getApps, initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCBEb5gRjXKxoZd5TwLf3B-juMTp3fey1g",
  authDomain: "the-lizeth-store.firebaseapp.com",
  databaseURL: "https://the-lizeth-store-default-rtdb.firebaseio.com",
  projectId: "the-lizeth-store",
  storageBucket: "the-lizeth-store.firebasestorage.app",
  messagingSenderId: "763352413444",
  appId: "1:763352413444:web:7ca5fef948137b4fd84c51",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getDatabase(app);