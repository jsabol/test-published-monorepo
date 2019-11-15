import React from "react";
import styles from "./Button.module.scss";

const Button = ({ children }) => (
  <button className={styles.root}>{children}</button>
);

export default Button;
