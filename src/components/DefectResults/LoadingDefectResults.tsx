import { useEffect, useState } from "react";
import styles from "./LoadingDefectResults.module.scss";

const LoadingText = () => {
  const [noDots, setNoDots] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNoDots((prev) => prev + 1);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.LoadingTextContainer}>
      <h4>Loading{".".repeat(noDots)}</h4>
    </div>
  );
};

export default LoadingText;
