import styles from "./ResultsButton.module.scss";

interface ResultsButtonProps {
  label: string;
  onClick: () => void;
  visibilityCondition?: boolean;
}

const ResultsButton = ({
  label,
  onClick,
  visibilityCondition = true,
}: ResultsButtonProps) => {
  return (
    <>
      {visibilityCondition && (
        <div className={styles.resultsButtonContainer}>
          <button className={styles.resultsButton} onClick={onClick}>
            {label}
          </button>
        </div>
      )}
    </>
  );
};

export default ResultsButton;
