import React from "react";
import "../css/Starter.css";

const Starter = ({ action, lvl, num, time }) => {
  const handleClick = () => {
    const gameLevel = {
      level: lvl,
      num_books: num,
      level_time: time,
    };

    action(gameLevel);
  };
  return (
    <button data-level={lvl} onClick={handleClick} className="wrapper__button">
      <div className="cols">
        <div className="col">
          <div className="container__card">
            <div className="front levels-front">
              <div className="inner">
                <p>{lvl}</p>
              </div>
            </div>
            <div className="back levels-back">
              <div className="inner">
                <p>books: {num}</p>
                <p>time: {time} sec</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};
export default Starter;
