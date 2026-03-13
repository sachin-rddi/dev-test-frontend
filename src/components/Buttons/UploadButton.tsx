import { useRef } from "react";
import type { ChangeEvent } from "react";
import styles from "./UploadButton.module.scss";

const UploadButton = ({
  setFileName,
  setFilePreview,
}: {
  setFileName: (name: string) => void;
  setFilePreview: (preview: string | null) => void;
}) => {
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
    <div className={styles.uploadButtonContainer}>
      <input
        ref={fileInputRef}
        type="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <button
        type="button"
        onClick={openFilePicker}
        className={styles.uploadButton}
      >
        {"Choose Image"}
      </button>
    </div>
  );
};

export default UploadButton;
