import { createSlice } from "@reduxjs/toolkit";

export const trackedAnswerClickSlice = createSlice({
    name: 'clicked_answer',
    initialState: [],
    reducers: {
        addTrackAnswerToStore(state, action) {
            return action.payload;
        }
    },
})

export const trackAnswerClick = state => state.clicked_answer;

export default trackedAnswerClickSlice.reducer;

export const { addTrackAnswerToStore, } = trackedAnswerClickSlice.actions;
