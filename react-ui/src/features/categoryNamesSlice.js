import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import data from '../mocks/name-endpoint.json'

export const fetchCategoryNames = createAsyncThunk('names/all', async() => {
    const apiKey = "17CifeUPzRUtsykNW6FZaDu5tm5tRvqv";
    const url = `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${apiKey}`;
    try {
        // const response = await fetch(url)
        // if(!response.ok){
        //     console.log('No data');
        // }
        // const category_names = await response.json();
        const category_names = data
        return category_names.results;
    } catch (error) {
        console.error(error)
    }
})

export const categoryNamesSlice = createSlice({
    name: 'category_names',
    initialState: [],
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchCategoryNames.fulfilled, (state, action) => {
            return action.payload
        })
    }
});

export const selectCategoryNames = state => state.category_names;

export default categoryNamesSlice.reducer;