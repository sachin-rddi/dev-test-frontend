import { useRef, useState } from "react";
import type { ChangeEvent } from "react";
import styles from "./UploadButton.module.scss";
import RunDefectDetectionButton from "./RunDefectDetectionButton";

const UploadButton = () => {
  const [fileName, setFileName] = useState("");
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFileName(selectedFile.name);
      setFilePreview(URL.createObjectURL(selectedFile));
    }
  };

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={styles.Upload_Button_Container}>
      <input
        ref={fileInputRef}
        type="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <button
        type="button"
        onClick={openFilePicker}
        className={styles.Upload_Button}
      >
        {"Choose Image"}
      </button>
      <div className={styles.preview_container}>
        {filePreview && (
          <>
            <p className={styles["preview-title"]}>Selected Image: {fileName}</p>
            <img src={filePreview} alt="Preview" className={styles.preview} />
            <RunDefectDetectionButton />
          </>
      )}
      </div>
    </div>
  );
};

export default UploadButton;
