import { useState } from "react";
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
      image: "",
      message: "A new note requires your attention.",
      detailPage: "/records/afa799a2-1c7e-48d6-bc8e-9fe652e56c16#notes",
      receivedTime: "1h ago",
    },
  ];

  return (
    <p onClick={onNotificationClick}>
      Notifications
      <Notifications
        data={mockNotificationData}
        markAsRead={onNotificationClick}
      />
    </p>
  );
};
