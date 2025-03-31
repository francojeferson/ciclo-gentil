import React from "react";
import styles from "./PhaseIndicator.module.css";

const PhaseIndicator = ({ phase }) => {
  return (
    <div className={styles.PhaseIndicator}>
      <span>Current Phase: </span>
      <strong>{phase}</strong>
    </div>
  );
};

export default PhaseIndicator;
