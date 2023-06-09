import React, { useState } from "react";
import "../css/GameView.css";

const Card = ({ data, position }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e) => {
    setIsActive((current) => !current);
  };

  return (
    <article onClick={handleClick}>
      <button className="wrapper__button">
        <div className="cols">
          <div className="col">
            <div className="container__card">
              {!isActive ? (
                <div className="front--side  front--active-transitions"></div>
              ) : (
                <div className="back--side back--active-transitions">
                  <img
                    data-card={data.book_title}
                    className="game__image"
                    src={data.url}
                    alt=""
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </button>
    </article>
  );
};
export default Card;
