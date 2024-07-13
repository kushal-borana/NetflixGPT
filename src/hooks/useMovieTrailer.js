import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";
import { useSelector } from "react-redux";

const useMovieTrailer = (ID) => {
  const trailer = useSelector((store) => store.movies?.movieTrailer);
  const dispatch = useDispatch();
  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + ID + "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const fetchMovieData = json.results?.filter(
      (video) => video.type === "Trailer"
    );
    const movieTrailer = fetchMovieData ? fetchMovieData[0] : json.results[0];
    dispatch(addMovieTrailer(movieTrailer));
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);

  return trailer;
};

export default useMovieTrailer;
