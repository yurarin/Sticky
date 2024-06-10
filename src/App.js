import { Header } from "./components/index";
import { Routes, Route, Navigate } from "react-router-dom";
import { Hello, Home, Add, Login } from "./elementIndex";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

function App() {
  const auth = getAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState();

  const FirebaseAuth = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogin(true);
        setUser(user);
      }
      setIsLoading(false);
    });
  }

  useEffect(() => {
    FirebaseAuth();
  },[]);

  if (!isLoading) {
    return (
      <div className="App">
        <Header version="1.0.5" />
        <div className='viewContainer'>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={isLogin ? <Home user={user} /> : <Navigate to="/hello" />} />
            <Route path="/hello" element={isLogin ? <Navigate to="/home" /> : <Hello />} />
            <Route path="/login" element={<Login />} />
            <Route path="/add" element={<Add user={user} />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
