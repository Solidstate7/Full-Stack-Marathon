import { useState } from "react";
import "./App.css";
import Login from "./components/pages/Login";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="App">
      <Login isLogin={isLogin} setIsLogin={setIsLogin}></Login>
    </div>
  );
}

export default App;
