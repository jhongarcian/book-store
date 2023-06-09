import { createSlice } from "@reduxjs/toolkit";
import { fetchWeekBestSellers } from "./weekBestSellersSlice";

const getData = (data) => {
    const {lists} = data;
    const images = [];
    for(let i = 0; i < lists.length; i++){
        for(let j = 0; j < lists[i].books.length; j++){
            images.push({url:lists[i].books[j].book_image, book_title: lists[i].books[j].title})
        }
    };
    const getUniqueData = new Set(images);
    const uniqueData = [...getUniqueData];  
    return uniqueData;
}

const bookImagesSlice = createSlice({
    name: 'book_images',
    initialState: [
    ],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchWeekBestSellers.fulfilled, (state, action) => {
            const data = action.payload;
            const books_data = getData(data)
            return books_data
        });
    }
});

export const selectBookImages = state => state.book_images;

export default bookImagesSlice.reducer;