import React from "react";
import styles from "./RecipeFilter.module.css";

const RecipeFilter = ({ filters, onUpdateFilters }) => {
  const handleFilterChange = (key, value) => {
    const updatedFilters = {
      ...filters,
      [key]: value,
    };
    onUpdateFilters(updatedFilters);
  };
  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterItem}>
        <label htmlFor="phase">Phase</label>
        <select id="phase" value={filters.phase} onChange={(e) => handleFilterChange("phase", e.target.value)}>
          <option value="menstrual">Menstrual</option>
          <option value="follicular">Follicular</option>
          <option value="ovulatory">Ovulatory</option>
          <option value="luteal">Luteal</option>
        </select>
      </div>

      <div className={styles.filterItem}>
        <label htmlFor="dietaryPreference">Dietary Preference</label>
        <select
          id="dietaryPreference"
          value={filters.dietaryPreference}
          onChange={(e) => handleFilterChange("dietaryPreference", e.target.value)}
        >
          <option value="none">None</option>
          <option value="vegan">Vegan</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="gluten-free">Gluten-Free</option>
        </select>
      </div>
    </div>
  );
};

export default RecipeFilter;
