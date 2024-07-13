import React from 'react';
import GptSearchBar from './GptSearchBar';
import { Netflic_GPT_BACKGROUND } from '../utils/constants';
import GptMovieSuggestions from './GptMovieSuggestions';

const GptSearch = () => {

  return (
    <div>
      <div className="absolute -z-20 bg-black">
      <img
        className="relative w-screen h-fit object-cover opacity-50"
        src={Netflic_GPT_BACKGROUND}
        alt="Background"
      />
      </div>
       <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch