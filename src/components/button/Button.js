import React from "react";
// import "./Button.scss";
import styles from "./Button.Module.css";

const Button = (props) => {
  return <button className={styles.button}>{props.children}</button>;
};

export default Button;
