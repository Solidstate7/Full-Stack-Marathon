import React, { useState, useMemo } from "react";

const Memo = () => {
  const [immutableNum, setImmutableNum] = useState(0);
  const [count, setCount] = useState(0);

  const increment = () => {
    console.log("Increment");
    setCount(count + 10);
    setImmutableNum(1);
    if (count === 50) setImmutableNum(count + 1);
  };

  const tempValue = useMemo(() => {
    console.log("Memo Hook executed");
    return immutableNum + 2;
  }, [immutableNum]);

  const TempComponent = () => {
    return useMemo(() => {
      return (
        <div>
          <p>count : {count}</p>
          <button onClick={increment}>Increment</button>
          <p>tempvalue: : {immutableNum}</p>
        </div>
      );
    });
  };

  return (
    <div>
      <p>count : {count}</p>
      <button onClick={increment}>Increment</button>
      <p>tempvalue: : {immutableNum}</p>
    </div>
  );
};

export default Memo;
