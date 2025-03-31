import React from "react";
import styles from "./InputField.module.css";

const InputField = ({ label, name, value, onChange, type = "text", placeholder = "" }) => {
  return (
    <div className={styles.inputField}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
};

export default InputField;
