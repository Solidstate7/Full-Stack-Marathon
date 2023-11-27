import React, { useState } from "react";
// built-in modules & submodule modules organized
import { BoomImg, BoomActive } from "../images";

export const Boom = () => {
  // 1. Images to be shown(should be imported)
  // 2. Changes when clicked(must have a state, changed by click events)

  // public vs src: cache data can be stored in the src directory(webpack bundling)

  const [onActive, setOnActive] = useState(false);
  // currentState, setState, (initial state)
  const onClickHandler = () => {
    if (!onActive) setOnActive(true);
    else setOnActive(false);
  };
  return (
    <div className="bombs" onClick={onClickHandler}>
      <img
        width={200}
        height={200}
        src={onActive ? BoomActive : BoomImg}
        alt=""
      />
    </div>
  );
};
