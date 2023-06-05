import React, { useEffect, useState } from "react";
import names_endpoint from "../../mocks/name-endpoint.json";
import "../css/Categories.css";

const Categories = () => {
  const [bestSellerNames, setBestSellersName] = useState([]);
  const [fiveNames, setFiveNames] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Animals');

  useEffect(() => {
    const apiKey = "17CifeUPzRUtsykNW6FZaDu5tm5tRvqv";
    const url = `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${apiKey}`;
    const fetchCategoryNames = () => {
      try {
        // const response = await fetch(url) ;
        const data = names_endpoint;
        // const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
      }
    };
    const data = fetchCategoryNames();
    if (data && data.results) {
      const names = data.results;
      setBestSellersName(names);
    }
  }, []);

  useEffect(() => {
    if (bestSellerNames && bestSellerNames.length > 0) {
      const fiveDesiredNames = getFiveCategoryNames(bestSellerNames);
      setFiveNames(fiveDesiredNames);
    }
  }, [bestSellerNames]);

  function getFiveCategoryNames(data) {
    const list = [...data];

    const desiredCategoryList = [
      "Science",
      "Animals",
      "Business Books",
      "Education",
      "Food and Fitness",
    ];

    let selectedNames = [];
    if (list && list.length) {
      for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < desiredCategoryList.length; j++) {
          if (list[i].list_name === desiredCategoryList[j]) {
            selectedNames.push(list[i]);
          }
        }
      }
    }
    return selectedNames;
  }

  const handleSelectedCategory = (e) => {
    const { textContent } = e.target;
    setSelectedCategory(textContent);
  };

  const categroyNames =
    fiveNames &&
    fiveNames.length > 0 &&
    fiveNames.map((item) => {
      return (
        <li className={`category-list ${selectedCategory === item.display_name ? 'active' : '' }`} key={item.list_name} data-name={item.list_name}>
          <button onClick={handleSelectedCategory}>{item.display_name}</button>
        </li>
      );
    });

  return (
    <section className="">
      <div className="y-wrap category-container__title">
        <h2>Categories</h2>
      </div>
      <ul className="y-wrap category-container__list">{categroyNames}</ul>
      <div>{selectedCategory && selectedCategory.length && <p>{selectedCategory}</p>}</div>
    </section>
  );
};

export default Categories;
