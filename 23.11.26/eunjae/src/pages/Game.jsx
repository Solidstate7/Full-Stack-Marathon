import React, { useEffect, useState } from "react";

import { Boom } from "../components/boom.jsx";

export const Game = () => {
  const [booms, setBooms] = useState([]);
  // lifecycle method - useEffect
  // booms: empty array -> state changes -> re-renders with 8-len array

  // useEffect(() => {
  //   // mount 최초에 한번만 실행됨
  //   const temp = new Array(8);
  //   for (let item of temp) {
  //     item = <Boom />;
  //   }
  //   setBooms(temp);
  // }, []);
  useEffect(() => {
    // Populate the array with <Boom /> components
    const temp = new Array(8)
      .fill(null)
      .map((_, index) => <Boom key={index} />);
    setBooms(temp);
  }, []);

  return <div>{booms}</div>;
};
