import { createSlice } from "@reduxjs/toolkit";

export const secondCardSlice = createSlice({
    name: 'second_card',
    initialState: [],
    reducers: {
        addSecondCardToStore(state, action) {
            return action.payload
        }
    }
});

export const secondCard = state => state.second_card;

export default secondCardSlice.reducer;

export const { addSecondCardToStore }  = secondCardSlice.actions;