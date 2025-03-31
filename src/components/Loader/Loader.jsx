import React from "react";
import styles from "./Loader.module.css";

const Loader = ({ message = "Loading..." }) => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.spinner}></div>
      <p className={styles.message}>{message}</p>
    </div>
  );
};

export default Loader;
