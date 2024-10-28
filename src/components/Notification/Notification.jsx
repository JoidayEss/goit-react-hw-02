import s from "./Notification.module.css";

const Notification = () => {
  return (
    <div className={s.not_container}>
      <p className={s.no_feedback}>No feedback yet</p>
    </div>
  );
};

export default Notification;
