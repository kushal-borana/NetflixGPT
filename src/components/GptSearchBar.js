import React, { useRef } from "react";
import {
  API_OPTIONS,
  API_TOKEN,
  lang,
} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { getGptMovieResults } from "../utils/gptSlice";


const GptSearchBar = () => {
  const dispatch = useDispatch();
  const currentLang = useSelector((store) => store.config.language);
  const searchBarRef = useRef(null);

  const seachedMovie = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS)
    const json = await data.json();
    return json.results;
  }
  const handleGPTSearch = async () => {
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query" +
      searchBarRef.current.value +
      "and give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const data = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=" +
        API_TOKEN,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: gptQuery }] }],
        }),
      }
    );

    const gptMoviesResults = await data.json();
    console.log(gptMoviesResults.candidates[0].content?.parts[0]?.text);

    const gptMovies = gptMoviesResults.candidates[0].content?.parts[0]?.text.split(", ");

    const promiseArray = gptMovies.map((movie) => seachedMovie(movie));

    const moviesList = await Promise.all(promiseArray);
    console.log(moviesList)

    dispatch(getGptMovieResults({ movieNames: gptMovies, movieResults:moviesList}))
    
  };

  return (
    <div className="pt-[7%] flex justify-center">
    <form className="w-full text-center" onSubmit={(e) => e.preventDefault()}>
      <div className="text-white">
        <p className="text-5xl font-bold">
          Unlimited movies, TV shows and more
        </p>
        <p className="text-2xl py-5">
          Watch anywhere. Cancel anytime.
        </p>
      </div>
      <div
        className="rounded-md flex justify-center w-full h-1/4"
      >
        <input
          ref={searchBarRef}
          type="text"
          className="w-1/3 h-full border text-white text-lg border-gray-500 rounded-md bg-black opacity-80 p-4"
          placeholder={lang[currentLang]?.placeholder}
        />
        <button
          className="w-1/12 text-white text-2xl txet-bold h-full rounded-md bg-red-600 mx-2"
          onClick={handleGPTSearch}
        >
          {lang[currentLang]?.search}
        </button>
      </div>
    </form>
</div>
  );
};

export default GptSearchBar;
