import { configureStore } from '@reduxjs/toolkit';
import categoryNamesReducer from '../features/categoryNamesSlice'

export default configureStore({
    reducer: {
        category_names: categoryNamesReducer
    }
});