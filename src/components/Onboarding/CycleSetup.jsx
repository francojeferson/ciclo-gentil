import React, { useState } from "react";
import styles from "./CycleSetup.module.css";

const CycleSetup = ({ data, onSubmit }) => {
  const [formData, setFormData] = useState(data);

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className={styles.cycleSetupForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="lastPeriod">Date of Last Period</label>
        <input
          type="date"
          id="lastPeriod"
          value={formData.lastPeriod}
          onChange={(e) => handleChange("lastPeriod", e.target.value)}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="cycleLength">Cycle Length (days)</label>
        <input
          type="number"
          id="cycleLength"
          value={formData.cycleLength}
          onChange={(e) => handleChange("cycleLength", parseInt(e.target.value, 10) || "")}
          min="21"
          max="40"
          required
        />
      </div>

      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
    </form>
  );
};

export default CycleSetup;
