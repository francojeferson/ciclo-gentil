import React, { useState, Suspense } from "react";
import styles from "./Onboarding.module.css";

// importaçao dinamica dos componentes
const ProfileSelection = React.lazy(() => import("../components/Onboarding/ProfileSelection"));
const CycleSetup = React.lazy(() => import("../components/Onboarding/CycleSetup"));

const Onboarding = () => {
  const [profile, setProfile] = useState("");
  const [cycleData, setCycleData] = useState({ lastPeriod: "", cycleLength: "" });

  const handleProfileSelect = (selectedProfile) => {
    setProfile(selectedProfile);
  };

  const handleCycleSubmit = (data) => {
    console.log("Cycle Data Submitted:", data);
    setCycleData(data);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Welcome to Onboarding</h2>
      <Suspense fallback={<p>Loading...</p>}>
        {!profile ? (
          <ProfileSelection onSelect={handleProfileSelect} />
        ) : (
          profile === "woman" && <CycleSetup data={cycleData} onSubmit={handleCycleSubmit} />
        )}
      </Suspense>
    </div>
  );
};

export default Onboarding;
