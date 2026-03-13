import { useState } from "react";
import styles from "./DefectDetectionButton.module.scss";
import FormatDefectResults from "../DefectResults/FormatDefectResults";
import type { Defect } from "../DefectResults/FormatDefectResults";
import { randomDefects } from "../../constants/apiResponse";

const DefectDetectionButton = () => {
  const [defectResults, setDefectResults] = useState<Defect[] | null>(null);

  function handleClick() {
    setDefectResults(randomDefects());
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

export default DefectDetectionButton;
