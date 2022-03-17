import { useEffect, useState } from "react";
import { NotificationData } from "../interfaces/viewInterfaces";

export const Notifications = (): JSX.Element => {
  const [notificationData, setNotificationData] =
    useState<NotificationData[]>();

  useEffect(() => {
    let mockNotificationData: NotificationData[] = JSON.parse(
      localStorage.getItem("notifications")
    );
    setNotificationData(mockNotificationData);
  }, []);

  console.log(notificationData);

  return <div>{notificationData[0]}</div>;
};
