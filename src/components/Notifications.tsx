import { useState } from "react";
import bell from "../assets/images/bell-3-128.png";
import Notifications from "react-notifications-menu";
import { NotificationData } from "../interfaces/viewInterfaces";

export const NotificationsComponent = (): JSX.Element => {
  const onNotificationClick = () => {
    mockNotificationData.shift();
    console.log(mockNotificationData);
    localStorage.setItem("notifications", JSON.stringify(mockNotificationData));
  };

  let mockNotificationData: NotificationData[] = JSON.parse(
    localStorage.getItem("notifications")
  );

  return (
    <div className="notificationsDiv">
      <p style={{ paddingBottom: "5px" }}>Notifications</p>
      <p>
        <Notifications
          data={mockNotificationData}
          icon={bell}
          header={{
            title: "Notifications",
            option: { text: "Mark as read", onClick: onNotificationClick },
          }}
        />
      </p>
    </div>
  );
};
