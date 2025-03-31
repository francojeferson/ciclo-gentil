import React from "react";
import styles from "./NotificationCard.module.css";

const NotificationCard = ({ title, message, onClose }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <strong>{title}</strong>
        <button aria-label="Close" className={styles.closeButton} onClick={onClose}>
          x
        </button>
      </div>
      <div className={styles.cardBody}>{message}</div>
    </div>
  );
};

export default NotificationCard;
