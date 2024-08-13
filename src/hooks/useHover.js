import { useState, useRef, useEffect } from "react";

export default function useHover() {
  const [hovered, setHovered] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    function handlerMouseOver() {
      setHovered(true);
    }

    function handlerMouseOut() {
      setHovered(false);
    }

    const node = nodeRef.current;
    if (node) {
      node.addEventListener("mouseover", handlerMouseOver);
      node.addEventListener("mouseout", handlerMouseOut);
    }

    return () => {
      node.removeEventListener("mouseover", handlerMouseOver);
      node.removeEventListener("mouseout", handlerMouseOut);
    };
  }, []);

  return { hovered, nodeRef };
}
