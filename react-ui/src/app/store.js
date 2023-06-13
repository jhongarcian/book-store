import { configureStore } from '@reduxjs/toolkit';
import categoryNamesReducer from '../features/categoryNamesSlice';
import weekBestSellersReducer from '../features/weekBestSellersSlice'
import bookImagesReducer from '../features/bookImagesSlice';
import trackedAnswerClickSlice from '../features/trackedAnswerClickSlice';
import firstCardSlice from '../features/firstCardSlice';
import secondCardSlice from '../features/secondCardSlice';
import gameInfoSlice from '../features/gameInfoSlice';
import bookFavoritesSlice from '../features/bookFavoritesSlice';



export default configureStore({
    reducer: {
        category_names: categoryNamesReducer,
        week_best_sellers: weekBestSellersReducer,
        book_images: bookImagesReducer,
        clicked_answer: trackedAnswerClickSlice,
        first_card: firstCardSlice,
        second_card: secondCardSlice,
        game_info: gameInfoSlice,
        favorite_books: bookFavoritesSlice
    }
});