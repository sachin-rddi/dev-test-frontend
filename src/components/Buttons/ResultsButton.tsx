import styles from "./ResultsButton.module.scss";

const ResultsButton = ({
  label,
  onClick,
  visibilityCondition = true,
  children,
}: {
  label: string;
  onClick: () => void;
  visibilityCondition?: boolean;
  children?: React.ReactNode;
}) => {
  return (
    <>
      {visibilityCondition && (
        <div className={styles.resultsButtonContainer}>
          <button
            className={styles.resultsButton}
            onClick={onClick}
          >
            {label}
          </button>
          {children}
        </div>
      )}
    </>
  );
};

export default ResultsButton;
