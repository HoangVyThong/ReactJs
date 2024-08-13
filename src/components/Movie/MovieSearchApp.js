import axios from "axios";
import React, { useEffect } from "react";
import MovieItem from "./MovieItem";
import useDebounce from "../../hooks/useDebounce";

// https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=405fa165709b9bd022e60dfbb4510411
// https://api.themoviedb.org/3/movie/550?api_key=405fa165709b9bd022e60dfbb4510411
const MovieSearchApp = () => {
  const [movies, setMovies] = React.useState([]);
  const [keyword, setKeyword] = React.useState("Jack+Reacher");
  const queryDebounce = useDebounce(keyword, 500);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${queryDebounce}&api_key=405fa165709b9bd022e60dfbb4510411`
      );

      // Check the response
      if (response.data.results) {
        setMovies(response.data.results);
      }
    }

    fetchData();
  }, [queryDebounce]);

  return (
    <div className="p-10">
      <div className="w-full max-w-[500px] mx-auto mb-10">
        <input
          name="keyword"
          type="text"
          className="w-full p-5 rounded-lg border border-purple-500 shadow-lg"
          placeholder="Search movie"
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-3 gap-x-10">
        {movies.length > 0 &&
          movies.map((item, index) => (
            <MovieItem key={item.id} data={item}></MovieItem>
          ))}
      </div>
    </div>
  );
};

export default MovieSearchApp;
