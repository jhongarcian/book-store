import { createSlice } from "@reduxjs/toolkit";

export const firstCardSlice = createSlice({ 
    name: "first_card",
    initialState: [],
    reducers: {
        addFirstCardToStore(state, action) {
            return action.payload;
        }
    }
})

export const firstCard = state => state.first_card;

export default firstCardSlice.reducer;

export const { addFirstCardToStore } = firstCardSlice.actions;