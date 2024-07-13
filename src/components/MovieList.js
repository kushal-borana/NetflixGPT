import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  return (
    <div className="pl-24">
        <p className="text-3xl py-4 text-white">{title}</p>
        <div className="flex hover:overflow-x-scroll">
            <div className="flex">
            {movies?.map(movie => <MovieCard key={movie?.id} poster_path={movie?.poster_path} />)}
            </div>
        </div>
    </div>
  )
}

export default MovieList