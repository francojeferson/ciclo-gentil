import React from "react";
import styles from "./PartnerTips.module.css";

const PartnerTips = ({ tips }) => {
  if (!tips || !tips.tips.length) {
    return (
      <div className={styles.partnerTips}>
        <p>No tips available for this phase.</p>
      </div>
    );
  }

  return (
    <div className={styles.partnerTips}>
      <h3>Phase: {tips.phase}</h3>
      <ul>
        {tips.tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
};

export default PartnerTips;
