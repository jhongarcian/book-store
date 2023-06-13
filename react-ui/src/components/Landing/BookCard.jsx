import React, { useEffect, useRef, useState } from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import "../css/BookCard.css";
import { useDispatch } from "react-redux";
import { addFavoriteBookToStore } from "../../features/bookFavoritesSlice";

const BookCard = ({ name, author, image, num, bookData }) => {
  const [elementInView, setElementInView] = useState();
  const [elementStyle, setElementStyle] = useState();
  const myRef = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if(entry.rootBounds.width >= 640) {
        setElementInView(entry.isIntersecting);
      }
    });
    observer.observe(myRef.current);
    setElementStyle(`book-card--animation-${num}`);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleClick = () => {
    dispatch(addFavoriteBookToStore(bookData))
  }

  return (
    <article className="book-card">
      <div className="book-card--top">
        <div className="book-card--text__container">
          <span>{name}</span>
          <span>{author}</span>
        </div>
        <div className="book-card--button__container">
          <button onClick={handleClick}>
            <MdOutlineFavoriteBorder></MdOutlineFavoriteBorder>
          </button>
        </div>
      </div>
      <div className="book-card--bottom">
        <img
          ref={myRef}
          src={image}
          alt=""
          className={`book-card--bottom-img img ${elementInView ? elementStyle : ""}`}
        />
      </div>
    </article>
  );
};
export default BookCard;
