import { Fragment } from "react";
import { useCount } from "./contexts/countContext";
import HeaderMain from "./components/HeaderMain";
import { AuthProvider } from "./contexts/authContext";
import { GalleryProvider } from "./contexts/galleryContext";
import PhotoList from "./components/gallery/PhotoList";

function CountDisplay() {
  const [count] = useCount();
  return <div>The count is: {count}</div>;
}

function Counter() {
  const [, setCount] = useCount();
  const increment = () => setCount((c) => c + 1);

  return (
    <button
      onClick={increment}
      className="p-4 rounded-lg font-semibold bg-purple-500
      "
    >
      Increment count
    </button>
  );
}

function App() {
  return (
    <Fragment>
      <AuthProvider>
        <GalleryProvider>
          <HeaderMain></HeaderMain>
          <PhotoList></PhotoList>
        </GalleryProvider>
      </AuthProvider>
    </Fragment>
    // <div className="p-5 flex items-center justify-center gap-x-5">
    //   <CountProvider>
    //     <CountDisplay></CountDisplay>
    //     <Counter></Counter>
    //   </CountProvider>
    // </div>
  );
}

export default App;
