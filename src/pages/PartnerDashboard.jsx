import React from "react";
import styles from "./PartnerDashboard.module.css";
import QuickActions from "../components/Dashboard/QuickActions";
import PartnerTips from "../components/PartnerDashboard/PartnerTips";
import ShoppingList from "../components/PartnerDashboard/ShoppingList";

const PartnerDashboard = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Partner Dashboard</h2>

      <div className={styles.section}>
        <h3>Quick Actions</h3>
        <QuickActions
          onLogSymptoms={() => alert("log symptoms clicked!")}
          onViewRecipes={() => alert("view recipes clicked!")}
        />
      </div>

      <div className={styles.section}>
        <h3>Support Tips</h3>
        <PartnerTips tips={{ phase: "Follicular", tips: ["Stay supportive!"] }} />
      </div>

      <div className={styles.section}>
        <h3 data-testid="shopping-list-title">Shopping List</h3>
        <ShoppingList items={["Spinach", "Almonds", "Avocado"]} />
      </div>
    </div>
  );
};

export default PartnerDashboard;
