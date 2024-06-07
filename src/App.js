import { Header } from "./components/index";
import { Routes, Route, Navigate } from "react-router-dom";
import { Hello } from "./elementIndex";

function App() {
  const login = false;

  return (
    <div className="App">
      <Header />
      <div className='viewContainer'>
        <Routes>
          <Route path="/" element={login ? <h1>ログインしてます！</h1> : <Navigate replace to="/hello" />} />
          <Route path="/hello" element={<Hello />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
