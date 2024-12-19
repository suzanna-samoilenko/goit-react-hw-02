import styles from "./Option.module.css";

export const Option = ({ onLeaveFeedback, onReset, totalFeedback }) => {
  return (
    <div>
      <button className={styles.option} onClick={() => onLeaveFeedback("good")}>
        Good
      </button>
      <button
        className={styles.option}
        onClick={() => onLeaveFeedback("neutral")}
      >
        Neutral
      </button>
      <button className={styles.option} onClick={() => onLeaveFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={styles.option} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};
