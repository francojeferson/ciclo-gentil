import React, { useState } from "react";
import "./App.css";
import NotificationBanner from "./components/Notifications/NotificationBanner";

function App() {
  const [bannerVisible, setBannerVisible] = useState(true);

  const handleCloseBanner = () => {
    setBannerVisible(false);
  };

  return (
    <div>
      <h1>App with Notification Banner</h1>
      {bannerVisible && (
        <NotificationBanner message="This is a test notification!" type="info" onClose={handleCloseBanner} />
      )}
    </div>
  );
}

export default App;
