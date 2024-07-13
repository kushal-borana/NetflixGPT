import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpcomingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  const GptSearchSuggestion = useSelector(
    (store) => store.gpt.openGptSuggestions
  );
  useNowPlayingMovies();
  useTopRatedMovies();
  useUpComingMovies();
  usePopularMovies();

  console.log(GptSearchSuggestion);
  return (
    <div className="h-fit overflow-x-hidden">
      <Header />
      {GptSearchSuggestion ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
