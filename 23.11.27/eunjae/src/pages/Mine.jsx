import React, { useEffect, useState } from "react";
import Entity from "../components/Mine/Entity";
import { Default, Flag, BoomImg, BoomActive } from "../images/Mine/index";

const minefieldStyles = {
  width: "600px",
  display: "grid",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  gridTemplateRows: "repeat(3,1fr)",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "10px",
};

const Mine = () => {
  const [entities, setEntities] = useState([
    Default,
    Default,
    Default,
    Default,
    Default,
    Default,
    Default,
    Default,
    Default,
  ]);

  const entityHandler = () => {};

  return (
    <div style={minefieldStyles} className="minefield">
      {entities.map((entity, index) => (
        <Entity handler={"sampleFunc"} key={index} imgsrc={entity} />
      ))}
    </div>
  );
};

export default Mine;
