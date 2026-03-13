import { useState } from "react";
import styles from "./DefectDetectionButton.module.scss";
import FormatDefectResults from "../DefectResults/FormatDefectResults";
import type { Defect } from "../DefectResults/FormatDefectResults";
import { randomDefects } from "../../constants/apiResponse";

const DefectDetectionButton = ({
  setSeeDefectResults,
  seeDefectResults,
}: {
  setSeeDefectResults: (results: boolean) => void;
  seeDefectResults: boolean;
}) => {
  const [defectResults, setDefectResults] = useState<Defect[] | null>(null);

  function handleClick() {
    setDefectResults(randomDefects());
    setSeeDefectResults(true);
  }

  return (
    <div className={styles.run_defect_detection_button_container}>
      <button
        className={styles.run_defect_detection_button}
        onClick={handleClick}
      >
        Run Defect Detection
      </button>
      {seeDefectResults && <FormatDefectResults results={defectResults} />}
    </div>
  );
};

export default DefectDetectionButton;
