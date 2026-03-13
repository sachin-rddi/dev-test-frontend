import type { DefectType } from "../enums";
import styles from "./FormatDefectResults.module.scss";

export interface Defect {
  x: number;
  y: number;
  width: number;
  height: number;
  type: DefectType;
}

const FormatDefectResults = ({ results }: { results: Defect[] | null }) => {
  if (!results || results.length === 0) {
    return <h3>No defects detected.</h3>;
  } else {
    return (
      <div className={styles.defect_results_container}>
        <h3>{results.length} Defects Detected:</h3>
        <ol>
          {results.map((defect, index) => (
            <li key={index}>
              Type: <span className={styles.defect_info}>{defect.type}</span>,
              Location: (<span className={styles.defect_info}>{defect.x}</span>,{" "}
              <span className={styles.defect_info}>{defect.y}</span>), Size:
              <span className={styles.defect_info}>
                {defect.width}x{defect.height}
              </span>
            </li>
          ))}
        </ol>
      </div>
    );
  }
};

export default FormatDefectResults;
