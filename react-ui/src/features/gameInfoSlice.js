import { createSlice } from "@reduxjs/toolkit";

export const gameInfoSlice = createSlice({
    name: 'game_info',
    initialState: [],
    reducers: {
        addGameInfo(state, action ) {
            return action.payload
        }
    }
});

export const selectGameInfo = state => state.game_info;

export default gameInfoSlice.reducer;

export const { addGameInfo } = gameInfoSlice.actions;