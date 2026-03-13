import { useState } from "react";
import styles from "./RunDefectDetectionButton.module.scss";
import { API_RESPONSE } from "../../constants/apiResponse";
import FormatDefectResults from "../FormatDefectResults";
import type { Defect } from "../FormatDefectResults"

const RunDefectDetectionButton = () => {
  const [defectResults, setDefectResults] = useState<Defect[] | null>(null);

  function handleClick() {
    const results = API_RESPONSE as Defect[];
    setDefectResults(results);
  }

  return (
    <div className={styles.run_defect_detection_button_container}>
      <button
        className={styles.run_defect_detection_button}
        onClick={handleClick}
      >
        Run Defect Detection
      </button>
      <FormatDefectResults results={defectResults} />
    </div>
  );
};

export default RunDefectDetectionButton;
