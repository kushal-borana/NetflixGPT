import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        movieTrailer: null,
        popularMovies: null,
        topRatedMovies: null,
        upComingMovies: null
    },
    reducers: {
        addNowPlayingMovies: (state,action) => void(state.nowPlayingMovies = action.payload),
        addMovieTrailer: (state,action) => void(state.movieTrailer = action.payload),
        addPopularMovies: (state,action) => void(state.popularMovies = action.payload),
        addUpComingMovies: (state,action) => void(state.upComingMovies=action.payload),
        addTopRatedMovies: (state,action) => void(state.topRatedMovies = action.payload)
    },
});

export const { addNowPlayingMovies, addMovieTrailer, addPopularMovies, addUpComingMovies, addTopRatedMovies} = movieSlice.actions;

export default movieSlice.reducer; 