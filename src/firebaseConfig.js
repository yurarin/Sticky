import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBn5lxwgzOWtM31JERv68Sz5CfEUBeXma0",
    authDomain: "sticky-note-33b93.firebaseapp.com",
    projectId: "sticky-note-33b93",
    storageBucket: "sticky-note-33b93.appspot.com",
    messagingSenderId: "39401948384",
    appId: "1:39401948384:web:8bb3386b2534d2e75ffc85",
    measurementId: "G-QFQF6X9MLD"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

const provider = new GoogleAuthProvider();

export { app, provider };