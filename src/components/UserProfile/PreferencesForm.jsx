import React from "react";
import styles from "./PreferencesForm.module.css";

const PreferencesForm = ({
  preferences = { dietaryPreference: "none", notifications: "enabled" },
  onUpdatePreferences,
}) => {
  const handleChange = (key, value) => {
    const updatedPreferences = {
      ...preferences,
      [key]: value,
    };
    onUpdatePreferences(updatedPreferences);
  };

  return (
    <form className={styles.preferencesForm}>
      <div className={styles.formGroup}>
        <label htmlFor="dietaryPreference">Dietary Preference</label>
        <select
          id="dietaryPreference"
          value={preferences.dietaryPreference}
          onChange={(e) => handleChange("dietaryPreference", e.target.value)}
        >
          <option value="none">None</option>
          <option value="vegan">Vegan</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="gluten-free">Gluten-Free</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="notifications">Notifications</label>
        <select
          id="notifications"
          value={preferences.notifications}
          onChange={(e) => handleChange("notifications", e.target.value)}
        >
          <option value="enabled">Enabled</option>
          <option value="disabled">Disabled</option>
        </select>
      </div>
    </form>
  );
};

export default PreferencesForm;
