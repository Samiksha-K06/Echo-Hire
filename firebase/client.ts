
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCJ9O3yobaphKf3J0th-bAxvUg4YRgv-eM",
    authDomain: "echo-hire-e4210.firebaseapp.com",
    projectId: "echo-hire-e4210",
    storageBucket: "echo-hire-e4210.firebasestorage.app",
    messagingSenderId: "933309804764",
    appId: "1:933309804764:web:31678aad511c244b01c419",
    measurementId: "G-H52QNMH0WZ"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);