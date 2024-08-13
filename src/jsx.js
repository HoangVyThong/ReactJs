import React from "react";

const jsx = () => {
  const element = <div id="root">Hello world</div>;
  const Relement = React.createElement("div", { id: "root" }, "Hello world");
  const element2 = (
    <div>
      <span>Hello</span> <span>world</span>
    </div>
  );
  const Relement2 = React.createElement("div", {
    children: [
      React.createElement("span", { children: "Hello" }),
      " ",
      React.createElement("span", { children: "world" }),
    ],
  });
  return <div className="heading" id="heading">
    This is heading
  </div>;
};

export default jsx;
