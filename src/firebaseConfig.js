import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBBNQCrDqBiIrF6RBawUEXYOPtRIAy9TAo",
    authDomain: "sticky-23836.firebaseapp.com",
    projectId: "sticky-23836",
    storageBucket: "sticky-23836.appspot.com",
    messagingSenderId: "401846711506",
    appId: "1:401846711506:web:888bb261d8f3ca102fe90b",
    measurementId: "G-KJYFDYC1SH"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

const provider = new GoogleAuthProvider();

const db = getFirestore(app);

export { app, provider, db };