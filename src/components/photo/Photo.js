import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

// write callback function call api use axios
const getRandomPhoto = async (page) => {
  try {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=4`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const Photo = () => {
  const [photos, setPhotos] = useState([]); // [1]
  const [page, setPage] = useState(1); // [2]

  const handleLoadMore = useRef({});
  // Handler on click button
  handleLoadMore.current = async () => {
    const newData = await getRandomPhoto(page);
    const newPhotos = [...photos, ...newData];
    setPhotos(newPhotos);
    setPage(page + 1);
  };

  useEffect(() => {
    handleLoadMore.current();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-4 p-8 gap-8">
        {photos.map((item) => (
          <img
            className="rounded-md"
            src={item.download_url}
            alt={item.author}
            key={item.id}
          />
        ))}
      </div>
      <div className="text-center">
        <button
          onClick={handleLoadMore.current}
          className="bg-purple-600 p-4 rounded-md text-white"
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default Photo;
