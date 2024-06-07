import { Header } from "./components/index";
import { Routes, Route, Navigate } from "react-router-dom";
import { Hello, Home } from "./elementIndex";

function App() {
  const login = true;

  return (
    <div className="App">
      <Header version="0.1.0" />
      <div className='viewContainer'>
        <Routes>
          <Route path="/" element={login ? <Home /> : <Navigate to="/hello" />} />
          <Route path="/hello" element={login ? <Navigate to="/" /> : <Hello />} />
          <Route path="/login" element={<h1>loginです</h1>} />
          <Route path="/create" element={<h1>createです。</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
