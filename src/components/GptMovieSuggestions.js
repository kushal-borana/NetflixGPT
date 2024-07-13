import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const gptData = useSelector(store => store.gpt)
  const { movieNames, movieResults } = gptData;   
  if(!movieNames) return null;
  return (
      <div className="bg-black text-white">
        <div>
      {movieNames.map((movieNames ,index) => <MovieList title={movieNames} movies={movieResults[index]} /> )}
    </div>
    </div>
  )
}

export default GptMovieSuggestions