import React from 'react';
import { useSelector } from "react-redux";
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';


const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  console.log(movies)
  if(!movies) return;
  const { id, title } = movies[0];
  return (
    <div> 
      <VideoTitle movieTitle={title}/>
      <VideoBackground  movieID={id}/>
    </div>
  )


}

export default MainContainer