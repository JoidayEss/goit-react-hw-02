import s from "./Feedback.module.css";

const Feedback = ({ amount, total, totalPositive = 0 }) => {
  return (
    <ul className={s.list_feedback}>
      <li className={s.items_feedback}>Good: {amount.good}</li>
      <li className={s.items_feedback}>Neutral: {amount.neutral}</li>
      <li className={s.items_feedback}>Bad: {amount.bad}</li>
      <li className={s.items_feedback}>Total: {total}</li>
      <li className={s.items_feedback}>Possitive: {totalPositive}</li>
    </ul>
  );
};

export default Feedback;
