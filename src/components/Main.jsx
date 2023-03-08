import React, { useState, useEffect } from "react";
import axios from "axios";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const apiKey = "6c1da559fcff94b3b34dd3e939e1db51";
  const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`,
    requestPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`,
  };

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  console.log(movie);
  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <img
          className="w-full h-full object-cover"
          //   src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} You'll need to check that the movie is populated before trying to render the image. Use conditional
          src={
            movie?.poster_path
              ? `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`
              : ""
          }
          alt={movie?.title}
        />
      </div>
    </div>
  );
};

export default Main;
