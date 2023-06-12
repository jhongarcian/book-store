import { createSlice } from "@reduxjs/toolkit";

export const trackedAnswerClickSlice = createSlice({
    name: 'clicked_answer',
    initialState: 0,
    reducers: {
        addTrackAnswerToStore(state , action) {
            return state + 1;
        }
    },
})

export const trackAnswerClick = state => state.clicked_answer;

export default trackedAnswerClickSlice.reducer;

export const { addTrackAnswerToStore } = trackedAnswerClickSlice.actions;
