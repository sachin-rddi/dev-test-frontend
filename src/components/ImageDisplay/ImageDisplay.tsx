import DefectDetectionButton from "../Buttons/DefectDetectionButton";
import styles from "./ImageDisplay.module.scss";

const ImageDisplay = ({
  filePreview,
  fileName,
  setSeeDefectResults,
  seeDefectResults,
}: {
  filePreview: string | null;
  fileName: string;
  setSeeDefectResults: (results: boolean) => void;
  seeDefectResults: boolean;
}) => {
  return (
    <div className={styles.previewContainer}>
      {filePreview && (
        <>
          <p className={styles.previewTitle}>Selected Image: {fileName}</p>
          <img src={filePreview} alt="Preview" className={styles.previewImage} />
          <DefectDetectionButton setSeeDefectResults={setSeeDefectResults} seeDefectResults={seeDefectResults} />
        </>
      )}
    </div>
  );
};

export default ImageDisplay;
