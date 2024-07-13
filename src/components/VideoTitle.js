import React from "react";

const VideoTitle = ({ movieTitle }) => {
  return (
    <div className="w-1/3 h-full absolute text-5xl text-white font-bold pt-[25%] pl-24 bg-gradient-to-r from-black">
      <p>{movieTitle}</p>
      <div className="w-4/5 p-5 flex">
        <button className="h-16 w-1/2 mr-2 flex justify-center bg-white rounded-md text-black text-2xl items-center">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-play-1912208-1617677.png"
            className="h-12"
            alt="Play"
          />
          Play
        </button>

        <button className="h-16 w-2/3 ml-2 flex justify-center bg-white rounded-md text-black text-2xl items-center">
          <img
            src="https://static.thenounproject.com/png/1815789-200.png"
            alt="info"
            className="h-9"
          />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
