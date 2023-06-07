import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import data from '../mocks/week-best-sellers.json'


export const fetchWeekBestSellers = createAsyncThunk('week/all', async () => {
    const apiKey = "17CifeUPzRUtsykNW6FZaDu5tm5tRvqv";
    const url = `https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${apiKey}`;
    try {
        // const response = await fetch(url);
        // if(!response.ok) {
        //     console.log('No data')
        // }
        // const weekBestSellers = await response.json()
        const weekBestSellers = data;
        console.log(weekBestSellers)
        return weekBestSellers.results
    } catch (error) {
        console.error(error)
    }

})

export const weekBestSellers = createSlice({
    name: 'week_best_sellers',
    initialState: [],
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchWeekBestSellers.fulfilled, (state, acttion) => {
            return acttion.payload
        });
    }
})

export const selectWeekBestSellers = state => state.week_best_sellers;

export default weekBestSellers.reducer;
