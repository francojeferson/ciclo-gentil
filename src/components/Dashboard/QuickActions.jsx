import React from "react";
import styles from "./QuickActions.module.css";

const QuickActions = ({ onLogSymptoms, onViewRecipes }) => {
  return (
    <div className={styles.quickActions}>
      <button className={styles.actionButton} onClick={onLogSymptoms}>
        Log Symptoms
      </button>
      <button className={styles.actionButton} onClick={onViewRecipes}>
        View Recipes
      </button>
    </div>
  );
};

export default QuickActions;
