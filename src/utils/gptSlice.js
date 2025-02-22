import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        openGptSuggestions: false,
        movieNames: null,
        movieResults: null
    },
    reducers: {
        isGptSuggestionOpen: (state) => {
            state.openGptSuggestions = !state.openGptSuggestions;
        },
        getGptMovieResults: (state,action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    },
});

export const { isGptSuggestionOpen, getGptMovieResults } = gptSlice.actions;
export default gptSlice.reducer;