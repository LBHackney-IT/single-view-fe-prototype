import { useState } from "react";
import bell from "../assets/images/bell-3-128.png";
import Notifications from "react-notifications-menu";
import { NotificationData } from "../interfaces/viewInterfaces";

export const NotificationsComponent = (): JSX.Element => {
  const [notificationCount, setNotificationCount] = useState(1);
  const onNotificationClick = () => {
    mockNotificationData.shift();
    console.log(mockNotificationData);
    localStorage.setItem("notifications", JSON.stringify(mockNotificationData));
  };

  let showNotificationPopup = false;

  const toggleNotificationPopup = () => {
    console.log("toggling popup");
    console.log(showNotificationPopup);
    showNotificationPopup = !showNotificationPopup;
    window.location.replace("/notifications");
  };

  let mockNotificationData: NotificationData[] = JSON.parse(
    localStorage.getItem("notifications")
  );

  return (
    <>
      <p style={{ marginBottom: "10px" }}>Notifications</p>
      <div className="notificationsDiv notification">
        <img
          className="notification-bell"
          src={bell}
          onClick={toggleNotificationPopup}
        ></img>
        {notificationCount > 0 && (
          <p className="notification-count badge">{notificationCount}</p>
        )}
      </div>
    </>
  );
};
