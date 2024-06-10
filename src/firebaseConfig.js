import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC58Ia9k0Znw-9r0eTNwJulWYpjat_Mp7Q",
    authDomain: "sticky-27381.firebaseapp.com",
    projectId: "sticky-27381",
    storageBucket: "sticky-27381.appspot.com",
    messagingSenderId: "489742591514",
    appId: "1:489742591514:web:c9470e990b95c347c893a3",
    measurementId: "G-FV9K64ED0P"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

const provider = new GoogleAuthProvider();

const db = getFirestore(app);

export { app, provider, db };