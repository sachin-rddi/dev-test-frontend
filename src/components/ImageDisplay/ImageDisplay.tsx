import DefectDetectionButton from "../Buttons/DefectDetectionButton";
import styles from "./ImageDisplay.module.scss";

const ImageDisplay = ({
  filePreview,
  fileName,
}: {
  filePreview: string | null;
  fileName: string;
}) => {
  return (
    <div className={styles.previewContainer}>
      {filePreview && (
        <>
          <p className={styles.previewTitle}>Selected Image: {fileName}</p>
          <img src={filePreview} alt="Preview" className={styles.previewImage} />
          <DefectDetectionButton />
        </>
      )}
    </div>
  );
};

export default ImageDisplay;
