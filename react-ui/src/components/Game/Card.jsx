import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/GameView.css";
import {
  addFirstCardToStore,
  firstCard,
  resetFirstCardInStore,
} from "../../features/firstCardSlice";
import {
  addSecondCardToStore,
  secondCard,
  resetSecondCardInStore,
} from "../../features/secondCardSlice";

const Card = ({ data, position, action, openCards, isMatch }) => {
  const [isActive, setIsActive] = useState();
  const [twoCardsInStore, setTwoCardsInStore] = useState(false);

  const dispatch = useDispatch();

  const first_card = useSelector(firstCard);
  const second_card = useSelector(secondCard);

  useEffect(() => {
    if (openCards && openCards.length) {
      const isMatchingCardInGame = openCards.find(
        (card) => card[0].cardPosition === position
      );

      if (isMatchingCardInGame) {
        if (!isMatch) {
          const timer = setTimeout(() => {
            setIsActive(false);
            setTwoCardsInStore(false);
            dispatch(resetFirstCardInStore());
            dispatch(resetSecondCardInStore());
          }, 600);
          return () => clearTimeout(timer);
        } else {
          setIsActive(true);
        }
      }
      dispatch(resetFirstCardInStore());
      dispatch(resetSecondCardInStore());
    }
  }, [openCards, isMatch, position]);

  const handleClick = (e) => {
    // If card is active then don't allow any logic
    if (isActive) return;
    // Save the card in the store
    if (first_card.length === 0 && second_card.length === 0) {
      dispatch(
        addFirstCardToStore([{ cardPosition: position, name: data.book_title }])
      );
    }
    if (first_card.length > 0 && second_card.length === 0) {
      dispatch(
        addSecondCardToStore([
          { cardPosition: position, name: data.book_title },
        ])
      );
      setTwoCardsInStore(true);
    }
    if (first_card.length && second_card.length) {
      dispatch(resetFirstCardInStore());
      dispatch(resetSecondCardInStore());
      return;
    }
    // Active the card to display the book
    setIsActive((current) => !current);
  };

  useEffect(() => {
    if (twoCardsInStore && first_card && second_card) {
      const data = [first_card, second_card];
      action(data);
    }
  }, [twoCardsInStore]);

  return (
    <article onClick={handleClick}>
      <button className="wrapper__button">
        <div className="cols">
          <div className="col">
            <div className="container__card">
              {isActive ? (
                <div className="back--side back--active-transitions">
                  <img
                    data-card={data.book_title}
                    className="game__image"
                    src={data.url}
                    alt=""
                  />
                </div>
              ) : (
                <div className="front--side  front--active-transitions"></div>
              )}
            </div>
          </div>
        </div>
      </button>
    </article>
  );
};
export default Card;
