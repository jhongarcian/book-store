import { configureStore } from '@reduxjs/toolkit';
import categoryNamesReducer from '../features/categoryNamesSlice';
import weekBestSellersReducer from '../features/weekBestSellersSlice'
import bookImagesReducer from '../features/bookImagesSlice';

export default configureStore({
    reducer: {
        category_names: categoryNamesReducer,
        week_best_sellers: weekBestSellersReducer,
        book_images: bookImagesReducer
    }
});