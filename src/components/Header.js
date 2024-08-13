import React, { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const handlerFixedHeader = () => {
      console.log("fixed header");
    };
    window.addEventListener("scroll", handlerFixedHeader);
  }, []);
  return <div className="p-5 bg-black w-full"></div>;
};

export default Header;
