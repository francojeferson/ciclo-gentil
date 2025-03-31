import React from "react";
import styles from "./NotificationBanner.module.css";
import { X as CloseIcon } from "lucide-react";

const NotificationBanner = ({ message, type = "info", onClose }) => {
  return (
    <div className={`${styles.banner} ${styles[type]}`}>
      <p className={styles.message}>{message}</p>
      {onClose && (
        <button aria-label="Close notification" className={styles.closeButton} onClick={onClose}>
          <CloseIcon className={styles.icon} />
        </button>
      )}
    </div>
  );
};

export default NotificationBanner;
