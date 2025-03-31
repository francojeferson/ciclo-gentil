import React from "react";
import styles from "./ProfileSelection.module.css";

const ProfileSelection = ({ onSelect }) => {
  return (
    <div className={styles.container}>
      <h3>Select your profile</h3>
      <div className={styles.options}>
        <button type="button" className={styles.optionButton} onClick={() => onSelect("woman")}>
          Woman
        </button>
        <button type="button" className={styles.optionButton} onClick={() => onSelect("partner")}>
          Partner
        </button>
      </div>
    </div>
  );
};

export default ProfileSelection;
