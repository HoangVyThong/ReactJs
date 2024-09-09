import { createContext, useContext, useState } from "react";

const fakeData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1725610588145-a508e5cfe90b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    isLike: false,
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1725656471105-c681d15d5834?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isLike: false,
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1725610588145-a508e5cfe90b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isLike: false,
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1719937206094-8de79c912f40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isLike: false,
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1721332153282-3be1f363074d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isLike: false,
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1725554515068-8bb766ba0724?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isLike: false,
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1725714354662-ceced155f0f7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isLike: false,
  },
];

const galleryContext = createContext();

function GalleryProvider(props) {
  const [photos, setPhotos] = useState(fakeData);
  const [cardItems, setCardItems] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);

  function toggleFavorite(photoId) {
    const updatedPhotos = photos.map((photo) => {
      if (photo.id === photoId) {
        return { ...photo, isLike: !photo.isLike };
      }

      return photo;
    });

    setPhotos(updatedPhotos);
  }

  const value = {
    photos,
    cardItems,
    favoriteList,
    setPhotos,
    setCardItems,
    setFavoriteList,
    toggleFavorite,
  };
  return (
    <galleryContext.Provider value={value} {...props}></galleryContext.Provider>
  );
}

function useGallery() {
  const context = useContext(galleryContext);
  if (typeof context === "undefined") {
    throw new Error("useGallery must be used within a GalleryProvider");
  }

  return context;
}

export { GalleryProvider, useGallery };
