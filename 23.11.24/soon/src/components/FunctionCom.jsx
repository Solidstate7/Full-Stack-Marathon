import React, { useState, useEffect } from "react";

// Functional Component
// Hook Functions -> life cycle management
// props as parameters (object)
export const FunctionCom = ({ name }) => {
  // useState -> return [state, setState]

  // argument of useState -> initial value
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);
  const clickHandler = () => {
    setNum2(num2 + 1);
  };

  // lifecycle management, executed once at the mount phase
  // first argument callback
  // second argument array -> if changed, callback is invoked.
  //
  useEffect(() => {
    console.log("componentDidMount");

    // console.log("num", num);
    // console.log("num2", num2);
  }, [num]);

  useEffect(() => {
    console.log("componentDidMount");

    console.log(num2);
  }, [num, num2]);

  return (
    <>
      <div>
        {name}
        {num}
      </div>
      <button onClick={clickHandler}>Count up</button>
    </>
  );
  // no need for using 'this'
};
