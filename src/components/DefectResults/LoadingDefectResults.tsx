import { useEffect, useState } from "react";
import styles from "./LoadingDefectResults.module.scss";

const messages = ["Loading.", "Loading..", "Loading..."];

const LoadingText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.LoadingTextContainer}>
      <h3>{messages[index]}</h3>
    </div>
  );
};
export default LoadingText;
