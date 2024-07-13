import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: 'config',
    initialState: {
        language: 'en',
    },
    reducers: {
        currentLanguage: (state,action) => void(state.language = action.payload)
    },
});

export const { currentLanguage }  = configSlice.actions;

export default configSlice.reducer;