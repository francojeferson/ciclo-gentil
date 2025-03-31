import React, { useState } from "react";
import styles from "./SymptomForm.module.css";

const SymptomForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    painLevel: "",
    mood: "",
    bloating: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className={styles.symptomForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="painLevel">Pain Level</label>
        <select name="painLevel" id="painLevel" value={formData.painLevel} onChange={handleChange}>
          <option value="">Select</option>
          <option value="1">1 - Mild</option>
          <option value="2">2 - Moderate</option>
          <option value="3">3 - Severe</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="mood">Mood</label>
        <input type="text" id="mood" name="mood" value={formData.mood} onChange={handleChange} />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="bloating">Bloating</label>
        <select name="bloating" id="bloating" value={formData.bloating} onChange={handleChange}>
          <option value="">Select</option>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>

      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
    </form>
  );
};

export default SymptomForm;
