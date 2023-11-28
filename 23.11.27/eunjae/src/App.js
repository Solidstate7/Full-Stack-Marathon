import "./App.css";
import { Routes, Route } from "react-router-dom";

import Main from "./pages/Main.jsx";
import Login from "./pages/Login.jsx";
import Mine from "./pages/Mine.jsx";
import RSP from "./pages/RSP.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mine" element={<Mine />} />
        <Route path="/rsp" element={<RSP />} />
      </Routes>
    </div>
  );
}

export default App;
