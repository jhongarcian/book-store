import React from "react";
import { Route, Routes } from "react-router-dom";
import { Landing, Game, Favorites, Books, Error } from "../views";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="game" element={<Game />}></Route>
      <Route path="favorites" element={<Favorites />}></Route>
      <Route path="books" element={<Books />}></Route>
      <Route path="*" element={<Error/>}></Route>
    </Routes>
  );
};
export default Main;
