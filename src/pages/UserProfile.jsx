import React from "react";
import styles from "./UserProfile.module.css";
import PreferencesForm from "../components/UserProfile/PreferencesForm";
import DataSharingSettings from "../components/UserProfile/DataSharingSettings";

const UserProfile = ({
  preferences = { dietaryPreference: "none", notifications: "enabled" },
  dataSharing = { shareWithPartner: false, shareWithFamily: false },
  onUpdatePreferences = () => {},
  onUpdateDataSharing = () => {},
}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>User Profile</h2>

      <div className={styles.section}>
        <h3>Preferences</h3>
        <PreferencesForm preferences={preferences} onUpdatePreferences={onUpdatePreferences} />
      </div>

      <div className={styles.section}>
        <h3>Data Sharing</h3>
        <DataSharingSettings settings={dataSharing} onUpdateSettings={onUpdateDataSharing} />
      </div>
    </div>
  );
};

export default UserProfile;
