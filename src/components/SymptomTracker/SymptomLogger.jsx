import React, { useState } from "react";
import styles from "./SymptomLogger.module.css";

const SymptomLogger = ({ onSave }) => {
  const [formData, setFormData] = useState({
    symptom: "",
    intensity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.symptom && formData.intensity) {
      onSave(formData);
      setFormData({ symptom: "", intensity: "" });
    }
  };

  return (
    <form className={styles.symptomLogger} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="symptom">Symptom</label>
        <input
          type="text"
          id="symptom"
          name="symptom"
          value={formData.symptom}
          onChange={handleChange}
          placeholder="Enter symptom"
          className={styles.input}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="intensity">Intensity</label>
        <select
          name="intensity"
          id="intensity"
          value={formData.intensity}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="">Select intensity</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <button type="submit" className={styles.submitButton}>
        Log Symptom
      </button>
    </form>
  );
};

export default SymptomLogger;
