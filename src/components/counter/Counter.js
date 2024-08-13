import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  // const handerIncrement = () => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 1000);
  //   //setCount((count) => count + 1);
  // };
  const [info, setInfo] = useState({
    firstName: "Hoàng",
    lastName: "Thông",
  });
  useEffect(() => {
    console.log("From input");
  }, [info.firstName]);
  return (
    <div className="p-5 flex gap-x-4 items-center">
      <input
        type="text"
        name="firstName"
        value={info.firstName}
        onChange={(e) =>
          setInfo({
            // Copy 1 đói tượng info và thay đổi thông tin của nó
            ...info,
            firstName: e.target.value,
          })
        }
      />
      <span className="text-2xl font-bold">{count}</span>
      <button
        onClick={() => setCount(count + 1)}
        className="inline-block p-3 bg-green-400 text-white"
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
