import bell from "../assets/images/notification-bell.png";
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
          classNamePrefix="sv-notification"
          header={{
            title: "Notifications",
            option: { text: "Mark as read", onClick: onNotificationClick },
          }}
        />
      </p>
    </div>
  );
};
