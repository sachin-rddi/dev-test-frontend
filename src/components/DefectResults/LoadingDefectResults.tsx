import { useEffect, useState } from "react";
import styles from "./LoadingDefectResults.module.scss";

const messages = ["Loading", "Loading.", "Loading..", "Loading..."];

const LoadingText = () => {
  const [noDots, setNoDots] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNoDots((prev) => (prev + 1) % messages.length);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.LoadingTextContainer}>
      <h4>{messages[noDots % messages.length]}</h4>
    </div>
  );
};

export default LoadingText;
