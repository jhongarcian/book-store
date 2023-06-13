import { createSlice } from "@reduxjs/toolkit";

export const bookFavoriteSlice = createSlice({
    name: 'favorite_books',
    initialState: {
        bookList: []
    },
    reducers: {
        addFavoriteBookToStore(state, action) {
            const data = action.payload;
            state.bookList.push(data);
        }
    },
})

export const getFavoritesFromStore = state => state.favorite_books;

export default bookFavoriteSlice.reducer;

export const { addFavoriteBookToStore } = bookFavoriteSlice.actions;
