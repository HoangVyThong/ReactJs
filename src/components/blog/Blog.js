import React, { useEffect, useRef } from "react";
import useLinkNewTab from "../../hooks/useLinkNewTab";
import useHover from "../../hooks/useHover";

const Blog = () => {
  // const { contentRef } = useLinkNewTab();
  const { hovered, nodeRef } = useHover();

  return (
    <div className="entry-content">
      <p className="mb-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui doloremque
        accusantium adipisci, suscipit modi, expedita, consequatur quaerat
        exercitationem minima nihil fugit tempore aspernatur mollitia cupiditate
        sint minus! Suscipit, totam non!
        <a
          href="https://google.com"
          className={`underline ${hovered ? "text-green-400" : ""}`}
          ref={nodeRef}
        >
          Google.com
        </a>
        ?
      </p>
      <p className="mb-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui doloremque
        accusantium adipisci, suscipit modi, expedita, consequatur quaerat
        exercitationem minima nihil fugit tempore aspernatur mollitia cupiditate
        sint minus! Suscipit, totam non!
        <a href="https://google.com" className="underline">
          Google.com
        </a>
        ?
      </p>
      <p className="mb-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui doloremque
        accusantium adipisci, suscipit modi, expedita, consequatur quaerat
        exercitationem minima nihil fugit tempore aspernatur mollitia cupiditate
        sint minus! Suscipit, totam non!
        <a href="https://google.com" className="underline">
          Google.com
        </a>
        ?
      </p>
    </div>
  );
};

export default Blog;
