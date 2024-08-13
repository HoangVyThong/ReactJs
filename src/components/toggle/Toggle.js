import React, { useState } from "react";
import "./ToggleStyle.css";
// // stateless functional component: component không sử dụng state
// function Toggle() {
//   return <div className="toggle"></div>;
// }
// // state functional component: component có sử dụng state
// function Toggle2() {
//   return <div className="toggle"></div>;
// }

/**
 * 1.enabling state:
 * 2. initializing state
 * 3. reading state
 * 4. updating state
 */

function Toggle() {
  const [on, setOn] = useState(false);
  console.log(on);
  const handleToggle = () => {
    setOn((on) => !on);
  };
  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
    </div>
  );
}
export default Toggle;
