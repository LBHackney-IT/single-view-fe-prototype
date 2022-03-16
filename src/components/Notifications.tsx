import { useState } from "react";
import NotificationBadge from "react-notification-badge";
import { Effect } from "react-notification-badge";

export const Notifications = (): JSX.Element => {
  const [notificationCount, setnotificationCount] = useState(1);
  const onNotificationClick = () => {
    setnotificationCount(0);
  };

  return (
    <p onClick={onNotificationClick}>
      Notifications{" "}
      <NotificationBadge count={notificationCount} effect={Effect.SCALE} />
    </p>
  );
};
