import styles from "./Feedback.module.css";

export const Feedback = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={styles.feedback}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive: {positivePercentage}%</li>
    </ul>
  );
};
