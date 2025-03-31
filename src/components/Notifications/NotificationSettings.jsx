import React from "react";
import styles from "./NotificationSettings.module.css";

const NotificationSettings = ({ settings, onUpdateSettings }) => {
  const handleToggle = (key) => {
    const updatedSettings = {
      ...settings,
      [key]: !settings[key],
    };
    onUpdateSettings(updatedSettings);
  };

  return (
    <div className={styles.settingsContainer}>
      <h3>Notification Settings</h3>

      <div className={styles.settingItem}>
        <label>
          <input type="checkbox" checked={settings.symptoms} onChange={() => handleToggle("symptoms")} />
          Notify about Symptoms
        </label>
      </div>

      <div className={styles.settingItem}>
        <label>
          <input type="checkbox" checked={settings.phases} onChange={() => handleToggle("phases")} />
          Notify about Phases
        </label>
      </div>

      <div className={styles.settingItem}>
        <label>
          <input type="checkbox" checked={settings.reminders} onChange={() => handleToggle("reminders")} />
          Notify about Reminders
        </label>
      </div>
    </div>
  );
};

export default NotificationSettings;
