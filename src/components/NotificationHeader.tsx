import { useState } from "react";
import bell from "../assets/images/bell-3-128.png";
import Notifications from "react-notifications-menu";
import { NotificationData } from "../interfaces/viewInterfaces";

export const NotificationsHeader = (): JSX.Element => {
  const [unreadNotificationCount, setUnreadNotificationCount] = useState(1);

  const redirectToNotifications = () => {
    setUnreadNotificationCount(0);
    window.location.replace("/notifications");
  };

  return (
    <>
      <p style={{ marginBottom: "10px" }}>Notifications</p>
      <div className="notificationsDiv notification">
        <img
          className="notification-bell"
          src={bell}
          onClick={redirectToNotifications}
        ></img>
        {unreadNotificationCount > 0 && (
          <p className="notification-count badge">{unreadNotificationCount}</p>
        )}
      </div>
    </>
  );
};
