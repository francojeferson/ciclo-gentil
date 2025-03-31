import React from "react";
import styles from "./EmptyState.module.css";

const EmptyState = ({ message = "Nothing to display" }) => {
  return (
    <div className={styles.emptyState}>
      <p>{message}</p>
    </div>
  );
};

export default EmptyState;
