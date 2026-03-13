import { useRef } from "react";
import type { ChangeEvent } from "react";
import styles from "./UploadButton.module.scss";

interface UploadButtonProps {
  label: string;
  onClick: (event: ChangeEvent<HTMLInputElement>) => void;
}

const UploadButton = ({ label, onClick }: UploadButtonProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={styles.uploadButtonContainer}>
      <input
        ref={fileInputRef}
        type="file"
        style={{ display: "none" }}
        onChange={onClick}
      />
      <button
        type="button"
        onClick={openFilePicker}
        className={styles.uploadButton}
      >
        {label}
      </button>
    </div>
  );
};

export default UploadButton;
