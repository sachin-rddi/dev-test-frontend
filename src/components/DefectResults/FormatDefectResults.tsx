import type { DefectType } from "../../enums";
import styles from "./FormatDefectResults.module.scss";

export interface Defect {
  x: number;
  y: number;
  width: number;
  height: number;
  type: DefectType;
}

const FormatDefectResults = ({ results }: { results: Defect[] | null }) => {
  if (!results || results.length === 0) return <h3>No defects detected.</h3>;

  return (
    <div className={styles.defectResultsContainer}>
      <h3>{results.length} Defects Detected:</h3>
      <ol>
        {results.map((defect, index) => (
          <li key={index}>
            Type: <span className={styles.defectInfo}>{defect.type}</span>
            <br />
            Location: (<span className={styles.defectInfo}>
              {defect.x}
            </span>, <span className={styles.defectInfo}>{defect.y}</span>)
            <br />
            Width: <span className={styles.defectInfo}>{defect.width}</span>
            <br />
            Height: <span className={styles.defectInfo}>{defect.height}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default FormatDefectResults;
