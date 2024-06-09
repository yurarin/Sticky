import { useEffect } from "react";
import { getAuth, signInWithPopup,  } from "firebase/auth";
import { provider } from "./firebaseConfig";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const FirebaseAuth = async () => {
        const auth = getAuth();
        await signInWithPopup(auth, provider);
        navigate("/home");
    };
    useEffect(() => {
        FirebaseAuth();
    });
};

export default Login; 