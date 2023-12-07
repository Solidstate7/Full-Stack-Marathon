// context
import { createContext } from "react";

const Global = createContext();

const Context = () => {
  const [login, setLogin] = useState(false);

  const obj = {
    login,
    setLogin,
  };
  return (
    <>
      <Global.Provider value={obj}>
        <A></A>
      </Global.Provider>
    </>
  );
};

export default Context;
