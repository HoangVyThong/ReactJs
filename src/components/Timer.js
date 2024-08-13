import React, { useEffect, useState } from "react";

const Timer = () => {
  const [message, setMessage] = useState("ThôngHV");
  useEffect(() => {
    const timer = setInterval(() => {
      console.log(message);
    }, 20000);

    return () => {
      clearInterval(timer);
    };
  }, [message]);
  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
    </div>
  );
};

export default Timer;
