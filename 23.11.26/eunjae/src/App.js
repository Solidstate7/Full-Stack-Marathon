import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Game } from "./pages/Game.jsx";
import Main from "./pages/Main.jsx";
import Login from "./pages/Login.jsx";
import Game2 from "./pages/Game2.jsx";

function App() {
  // Bomb Component, once clicked it explodes

  // Route Attributes
  // path : conditions(URI)
  // element : components
  return (
    <div className="App">
      <Routes>
        {/* Cases */}
        <Route path="/" element={<Main />} />
        <Route path="/game" element={<Game />} />
        <Route path="/login" element={<Login />} />
        <Route path="game2" element={<Game2 />} />
      </Routes>
    </div>
  );
}

export default App;
