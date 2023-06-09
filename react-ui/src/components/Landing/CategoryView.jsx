import React, { useEffect, useState } from "react";
import "../css/CategoryView.css";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const CategoryView = ({ data }) => {
  const [dataBooks, setDataBooks] = useState([]);

  useEffect(() => {
    const books =
      data &&
      data[0].books &&
      data[0].books.length > 0 &&
      data[0].books.map((item) => {
        if (item.book_image) {
          return item;
        }
      });
    console.log(data);
    setDataBooks(books);
  }, [data]);

  const books =
    dataBooks &&
    dataBooks.length > 0 &&
    dataBooks.map((item) => {
      return (
        <li key={item.title}>
          <div className="book-category__wrapper">
            <div className="book-category__wrapper--text">
              <span className="book-category__title"> {item.title}</span>
              <div className="book-card--button__container">
                <button>
                  <MdOutlineFavoriteBorder></MdOutlineFavoriteBorder>
                </button>
              </div>
            </div>
            <div className="book-category__image">
              <img src={item.book_image} alt={item.title} />
            </div>
          </div>
        </li>
      );
    });
  return (
    <div className="y-wrap">
      <ul className="book-category__container">{books}</ul>
    </div>
  );
};
export default CategoryView;
