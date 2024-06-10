import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAOcEp70YPqoK7IQvGw3C7Y24E3IXR5orE",
    authDomain: "sticky-af215.firebaseapp.com",
    projectId: "sticky-af215",
    storageBucket: "sticky-af215.appspot.com",
    messagingSenderId: "723924245435",
    appId: "1:723924245435:web:76dd2be27dd31b465d029e",
    measurementId: "G-JH2BV67MEH"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

const provider = new GoogleAuthProvider();

const db = getFirestore(app);

export { app, provider, db };