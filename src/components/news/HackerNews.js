import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import lodash from "lodash";

// https://hn.algolia.com/api/v1/search?query=react
const HackerNews = () => {
  const [hits, setHits] = useState([]); // [1]
  const [query, setQuery] = useState(""); // [2]
  const [loading, setLoading] = useState(true); // [3]
  const [errorMessages, setErrorMessages] = useState(""); // [4]
  const [endPoint, setEndPoint] = useState(
    `https://hn.algolia.com/api/v1/search?query=${query}`
  ); // [5]

  const handlerFetchData = useRef({});
  handlerFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(endPoint);
      setHits(response.data?.hits || []);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setErrorMessages(`The error occurred: ${error}`);
    }
  };

  //   const handlerUpdateQuery = lodash.debounce((e) => {
  //     setQuery(e.target.value);
  //   }, 500);

  useEffect(() => {
    handlerFetchData.current();
  }, [endPoint]);
  return (
    <div className="bg-white mx-auto mt-5 p-5 rounded-lg shadow-md w-2/4">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-200 p-5 w-full rounded-md transition-all focus:border-blue-400"
          defaultValue={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-blue-400 text-white font-semibold p-5 rounded-md"
          onClick={() => {
            setEndPoint(`https://hn.algolia.com/api/v1/search?query=${query}`);
          }}
        >
          Fetching
        </button>
      </div>
      {loading && (
        <div className="loading w-8 h-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin mx-auto my-10"></div>
      )}
      {!loading && errorMessages && (
        <p className="text-red-400">{errorMessages}</p>
      )}
      <div className="flex flex-wrap gap-5">
        {!loading &&
          !errorMessages &&
          hits.length > 0 &&
          hits.map((item, index) => {
            if (!item.title || item.title.length <= 0) return null;
            return (
              <h3 key={item.title} className="p-3 bg-gray-300 rounded-md">
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNews;
