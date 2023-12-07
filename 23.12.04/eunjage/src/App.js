import "./App.css";
import Login from "./pages/Login";
import Memo from "./Memo/Memo";
import { useState } from "react";

function App() {
  const [temp, setTemp] = useState(0);

  const onClickHandler = () => {
    setTemp(temp + 1);
  };

  return (
    <div className="App">
      <Login></Login>
      <Memo></Memo>
      <button onClick={onClickHandler}>BUTTON</button>
    </div>
  );
}

export default App;
