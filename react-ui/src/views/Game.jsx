import React, { useEffect, useState } from "react";
import { Starter, GameView } from "../components/Game";
import levels from "../mocks/game_levels.json";
import { selectBookImages } from "../features/bookImagesSlice";
import "./css/Game.css";
import { useDispatch, useSelector } from "react-redux";
import { addGameInfo } from "../features/gameInfoSlice";

const Game = () => {
  const [level, setLevel] = useState();
  const [imageData, setImageData] = useState({});
  const [numberOfTries, setNumberOfTries] = useState()

  const dispatch = useDispatch();

  const dataBookImages = useSelector(selectBookImages);

  useEffect(() => {
    const bookImages = dataBookImages &&
      dataBookImages.length && [...dataBookImages];
    if (level && bookImages) {
      // Array Sorted
      bookImages.sort((a, b) => 0.5 - Math.random());
      // Get the number of images to display in the game
      const levelImages = gameImagesList(bookImages, level.num_books);
      levelImages.sort((a, b) => 0.5 - Math.random());
      setImageData({ levelImages, level });
    }
    return () => {
      setImageData({});
    };
  }, [level]);



  const handleLevelClick = (gameLevel) => {
    setLevel(gameLevel);
  };

  const handleAction = (numberOfCardOpened) => {
    setNumberOfTries(numberOfCardOpened)
  }

  function gameImagesList(bookList, levelData) {
    let list = [];
    for (let i = 0; i < levelData; i++) {
      list.push(bookList[i]);
      list.push(bookList[i]);
    }
    return list;
  }
  const gameView =
    imageData &&
    imageData.levelImages &&
    imageData.levelImages.length &&
    imageData.levelImages;

  dispatch(addGameInfo(gameView));

  const levelsView =
    levels &&
    levels.length &&
    levels.map((item) => {
      return (
        <Starter
          action={handleLevelClick}
          key={item.id}
          lvl={item.level}
          num={item.number_of_books}
          time={item.time}
        />
      );
    });

  return (
    <section className="y-wrap">
      <h1 className="game__title">Game time</h1>
      <div>
        <span>Number of tries</span>
        <span>{numberOfTries}</span>
      </div>
      {!level && <div className="game__starter">{levelsView}</div>}
      {level && imageData && imageData.levelImages && (
        <GameView action={handleAction} gameLevel={level} />
      )}
    </section>
  );
}
export default Game;
