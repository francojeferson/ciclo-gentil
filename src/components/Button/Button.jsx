import React from "react";
import styles from "./Button.module.css";

const Button = ({ onClick, children, type = "button", styleType = "primary", disabled = false }) => {
  const className = `${styles.btn} ${styleType === "primary" ? styles.btnPrimary : styles.btnSecondary} ${
    disabled ? styles.btnDisabled : ""
  }`;

  return (
    <button type={type} className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
