import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "./index";
import "../css/GameView.css";
import { selectGameInfo } from "../../features/gameInfoSlice";
import { addTrackAnswerToStore } from '../../features/trackedAnswerClickSlice'

const GameView = ({ gameLevel }) => {
  const [match, setMatch] = useState({});
  const [isMatch, setIsMatch] = useState();
  const data = useSelector(selectGameInfo);

  const dispatch = useDispatch()

  const handleClick = (twoCards) => {
    setMatch(twoCards);
    dispatch( addTrackAnswerToStore() )
  };

  useEffect(() => {
    if (match && match.length) {
      const [firstCard, secondCard] = match;
      const referenceValue = firstCard[0].name;
      const sameCards = match.every((obj) => obj[0].name === referenceValue);
      sameCards ? setIsMatch(true) : setIsMatch(false);
    }
  }, [match]);
  const bookCards = data.map((item, index) => {
    return (
      <Card
        key={index}
        data={item}
        position={index}
        action={handleClick}
        openCards={match}
        isMatch={isMatch}
      />
    );
  });

  return (
    <aside className={`game--area game__${gameLevel.level}`}>{bookCards}</aside>
  );
};
export default GameView;
