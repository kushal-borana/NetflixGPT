import React from 'react';
import { MOVIE_POSTER_PATH, MOVIE_POSTER_PATH_NOT_PRESENT, Netflic_GPT_USERPROFILEURL } from '../utils/constants';

const MovieCard = ({poster_path}) => {
    //console.log(movies);
  return (
    <div className="pr-4 w-56">
      {poster_path ? (<img src={MOVIE_POSTER_PATH + poster_path} className="rounded-md" alt="movie poster" />)
      : (<img src={MOVIE_POSTER_PATH_NOT_PRESENT} className="rounded-md" alt="movie poster" />)}
    </div>
  )
}

export default MovieCard