import { useState } from "react";
import bell from "../assets/images/whitebellv2.png";
import Notifications from "react-notifications-menu";

export const NotificationsComponent = (): JSX.Element => {
  const [notificationCount, setnotificationCount] = useState(1);
  const onNotificationClick = () => {
    setnotificationCount(0);
  };

  type NotificationData = {
    image: string;
    message: string;
    detailPage: string;
    receivedTime: string;
  };

  const mockNotificationData: NotificationData[] = [
    {
      image:
        "https://cdn.iconscout.com/icon/free/png-256/list-message-2367725-1976875.png",
      message: "A new note requires your attention.",
      detailPage: "/records/afa799a2-1c7e-48d6-bc8e-9fe652e56c16#notes",
      receivedTime: "1h ago",
    },
  ];

  return (
    <div className="notificationsDiv">
      <p onClick={onNotificationClick}>
        <Notifications
          data={mockNotificationData}
          markAsRead={onNotificationClick}
          icon={bell}
        />
      </p>
    </div>
  );
};
