import styles from "./ResultsButton.module.scss";

interface ResultsButtonProps {
  label: string;
  onClick: () => void;
  visibilityCondition?: boolean;
  children?: React.ReactNode;
}

const ResultsButton = ({
  label,
  onClick,
  visibilityCondition = true,
  children,
}: ResultsButtonProps) => {
  return (
    <>
      {visibilityCondition && (
        <div className={styles.resultsButtonContainer}>
          <button className={styles.resultsButton} onClick={onClick}>
            {label}
          </button>
          {children}
        </div>
      )}
    </>
  );
};

export default ResultsButton;
