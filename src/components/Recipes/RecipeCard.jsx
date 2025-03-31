import React from "react";
import styles from "./RecipeCard.module.css";

const RecipeCard = ({ recipe, onViewDetails }) => {
  const { title, description, image } = recipe;
  return (
    <div className={styles.card}>
      {image && <img src={image} alt={title} className={styles.image} />}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <button onClick={onViewDetails} className={styles.viewDetailsButton} aria-label="View Details">
          View Details
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
