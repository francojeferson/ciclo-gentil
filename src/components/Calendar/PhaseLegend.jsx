import React from "react";
import styles from "./PhaseLegend.module.css";

const phases = [
  { key: "menstrual", label: "Menstrual" },
  { key: "follicular", label: "Follicular" },
  { key: "ovulatory", label: "Ovulatory" },
  { key: "luteal", label: "Luteal" },
];

const PhaseLegend = () => {
  return (
    <div className={styles.legend}>
      {phases.map((phase) => (
        <div key={phase.key} className={styles.legendItem}>
          <span data-testid="phase-indicator" className={`${styles.indicator} ${styles[`phase-${phase.key}`]}`}></span>
          <span className={styles.label}>{phase.label}</span>
        </div>
      ))}
    </div>
  );
};

export default PhaseLegend;
