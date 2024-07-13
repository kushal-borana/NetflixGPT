import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const moviesData= useSelector((store) => store.movies);
  return (
    <div className="h-fit w-screen bg-black">
      <div className="-mt-72 -mr-10 relative z-20">
      <MovieList title={"Now Playing"} movies={moviesData?.nowPlayingMovies}/>
      <MovieList title={"Popular Movies"} movies={moviesData?.popularMovies}/>
      <MovieList title={"Top Rated Movies"} movies={moviesData?.topRatedMovies}/>
      <MovieList title={"Upcoming Movies"} movies={moviesData?.upComingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer