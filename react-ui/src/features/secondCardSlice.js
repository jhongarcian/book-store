import { createSlice } from "@reduxjs/toolkit";

export const secondCardSlice = createSlice({
    name: 'second_card',
    initialState: [],
    reducers: {
        addSecondCardToStore(state, action) {
            return action.payload
        },
        resetSecondCardInStore: (state) => {
            return []
        }
    }
});


export const secondCard = state => state.second_card;

export default secondCardSlice.reducer;

export const { addSecondCardToStore, resetSecondCardInStore }  = secondCardSlice.actions;