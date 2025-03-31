import React from "react";
import styles from "./DataSharingSettings.module.css";

const DataSharingSettings = ({ settings = { shareWithPartner: false, shareWithFamily: false }, onUpdateSettings }) => {
  const handleToggle = (key) => {
    const updatedSettings = {
      ...settings,
      [key]: !settings[key],
    };
    onUpdateSettings(updatedSettings);
  };

  return (
    <div className={styles.settingsContainer}>
      <h3>Data Sharing Settings</h3>

      <div className={styles.settingItem}>
        <label>
          <input
            type="checkbox"
            checked={settings.shareWithPartner}
            onChange={() => handleToggle("shareWithPartner")}
          />
          Share data with partner
        </label>
      </div>

      <div className={styles.settingItem}>
        <label>
          <input type="checkbox" checked={settings.shareWithFamily} onChange={() => handleToggle("shareWithFamily")} />
          Share data with family
        </label>
      </div>
    </div>
  );
};

export default DataSharingSettings;
