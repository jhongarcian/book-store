import React, { useState } from "react";
import { Card } from "./index";
import "../css/GameView.css";

const GameView = ({ data, gameLevel }) => {
  const bookCards = data
    .map((item, index) => {
      return <Card key={index + 1} data={item} position={index} />;
    })
    .sort((a, b) => 0.5 - Math.random());

  return (
    <aside className={`game--area game__${gameLevel.level}`}>
        {bookCards}
    </aside>
  );
};
export default GameView;
