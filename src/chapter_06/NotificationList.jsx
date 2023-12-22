import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
  {
    id: 1,
    message: "안녕하세요, 오늘 일정을 알려드립니다.",
  },
  {
    id: 2,
    message: "점심 식사 시간입니다.",
  },
  {
    id: 3,
    message: "이제 곧 미팅이 시작됩니다",
  },
];

var timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);
    console.log("지점1");
    this.state = {
      notifications: [],
    };
  }

  componentDidMount() {
    const { notifications } = this.state;
    timer = setInterval(() => {
      if (notifications.length < reservedNotifications.length) {
        const index = notifications.length;
        notifications.push(reservedNotifications[index]);
        this.setState({
          notifications: notifications,
        });
        console.log("지점2");
      } else {
        this.setState({
          notifications: [],
        });
        console.log("지점1");
        clearInterval(timer);
      }
    }, 1000);
  }
  componentWillUnmount() {
    if (timer) {
      clearInterval(timer);
    }
  }

  render() {
    return (
      <div>
        {this.state.notifications.map((notification) => {
          return (
            <Notification
              key={notification.id}
              id={notification.id}
              message={notification.message}
            />
          );
        })}
      </div>
    );
  }
}

export default NotificationList