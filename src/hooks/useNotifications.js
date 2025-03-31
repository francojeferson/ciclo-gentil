export const useNotifications = () => {
  const sendNotification = (message) => {
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification(message);
    } else if ("Notification" in window) {
      Notification.requestPermission();
    }
  };

  return { sendNotification };
};
