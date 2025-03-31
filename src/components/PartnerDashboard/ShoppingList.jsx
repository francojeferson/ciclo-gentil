import React from "react";
import styles from "./ShoppingList.module.css";

const ShoppingList = ({ items }) => {
  if (!items || items.length === 0) {
    return (
      <div className={styles.shoppingList}>
        <p>No items in your shopping list.</p>
      </div>
    );
  }

  return (
    <div className={styles.shoppingList}>
      <h3>Shopping List</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
