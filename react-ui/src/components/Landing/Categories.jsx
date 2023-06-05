import React, { useEffect, useState } from "react";
import "../css/Categories.css";
import { useSelector } from "react-redux";
import { selectCategoryNames } from "../../features/categoryNamesSlice";

const Categories = () => {
  const [bestSellerNames, setBestSellersName] = useState([]);
  const [fiveNames, setFiveNames] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Animals');
  
  const dataCategoryNames = useSelector(selectCategoryNames);

  useEffect(() => {
    if (dataCategoryNames) {
      const names = [...dataCategoryNames];
      setBestSellersName(names);
    }
  }, [dataCategoryNames]);

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
