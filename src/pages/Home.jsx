import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import PhaseIndicator from "../components/Dashboard/PhaseIndicator";
import QuickActions from "../components/Dashboard/QuickActions";

const Home = () => {
  const handleLogSymptoms = () => {
    alert("Log Symptoms clicked!");
  };

  const handleViewRecipes = () => {
    alert("View Recipes clicked!");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Home</h2>

      <PhaseIndicator phase="Follicular" />

      <QuickActions onLogSymptoms={handleLogSymptoms} onViewRecipes={handleViewRecipes} />

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/profile">User Profile</Link>
          </li>
          <li>
            <Link to="/partner-dashboard">Partner Dashboard</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
