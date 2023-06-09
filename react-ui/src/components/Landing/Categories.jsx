import React, { useEffect, useState } from "react";
import "../css/Categories.css";
import { useSelector } from "react-redux";
import {selectWeekBestSellers} from '../../features/weekBestSellersSlice'
import CategoryView from "./CategoryView";


const Categories = () => {
  const [fiveNames, setFiveNames] = useState([]);
  const [selectedCategoryName, setSelectedCategoryName] = useState();
  const [selectedCategoryData, setSelectedCategoryData] = useState([])
  
  const dataWeekBestSelllers = useSelector(selectWeekBestSellers);

  useEffect(() => {
    if (dataWeekBestSelllers) {
      const list = [...dataWeekBestSelllers.lists];
      if (list && list.length > 0) {
        const fiveDesiredNames = getFiveCategoryNames(list);
        setFiveNames(fiveDesiredNames);
        setSelectedCategoryName(fiveDesiredNames[0].display_name)
      }
    }
    return () => {
      setFiveNames([])
      setSelectedCategoryName()
    } 
  }, [dataWeekBestSelllers]);

  useEffect(() => {
    const data = fiveNames && fiveNames.length > 0 && fiveNames.filter(item => item.display_name === selectedCategoryName)
    setSelectedCategoryData(data)
  } , [selectedCategoryName])

  function getFiveCategoryNames(data) {
    const list = [...data];

    const listSorted = list.sort((a,b) => 0.5 - Math.random())

    let selectedNames = [];
    if (list && list.length) {
      for (let i = 0; i < 4; i++) {
            selectedNames.push(listSorted[i]);
          }
      }
    return selectedNames;
  }

  const handleSelectedCategoryName = (e) => {
    const { textContent } = e.target;
    setSelectedCategoryName(textContent);
  };

  const categroyNames =
    fiveNames &&
    fiveNames.length > 0 &&
    fiveNames.map((item) => {
      return (
        <li className={`category-list ${selectedCategoryName === item.display_name ? 'active' : '' }`} key={item.list_name} data-name={item.list_name}>
          <button onClick={handleSelectedCategoryName}>{item.display_name}</button>
        </li>
      );
    });

  return (
    <section className="">
      <div className="y-wrap category-container__title">
        <h2>Categories</h2>
      </div>
      <ul className="y-wrap category-container__list">{categroyNames}</ul>
      <div>{selectedCategoryName && selectedCategoryName.length && <CategoryView data={selectedCategoryData} />}</div>
      
    </section>
  );
};

export default Categories;
