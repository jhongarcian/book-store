import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from './app/store'
import { fetchCategoryNames } from "./features/categoryNamesSlice";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { fetchWeekBestSellers } from "./features/weekBestSellersSlice";

store.dispatch(fetchCategoryNames())
store.dispatch(fetchWeekBestSellers())

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
