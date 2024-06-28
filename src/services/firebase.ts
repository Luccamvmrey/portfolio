// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.GOOGLE_API_KEY,
    authDomain: "portfolio-lucca.firebaseapp.com",
    projectId: "portfolio-lucca",
    storageBucket: "portfolio-lucca.appspot.com",
    messagingSenderId: "1035881533463",
    appId: "1:1035881533463:web:9e95bcb11237fdfb1f4c52"
};

// Initialize Firebase
// eslint-disable-next-line
export const app = initializeApp(firebaseConfig);