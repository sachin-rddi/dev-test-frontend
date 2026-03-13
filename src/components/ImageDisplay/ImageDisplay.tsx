import styles from "./ImageDisplay.module.scss";

interface ImageDisplayProps {
  image: string | null;
  filename: string;
  label?: string;
}

const ImageDisplay = ({ image, filename, label }: ImageDisplayProps) => {
  return (
    <div className={styles.previewContainer}>
      {image && (
        <>
          <p className={styles.previewTitle}>
            {label} {filename}
          </p>
          <img src={image} alt="Preview" className={styles.previewImage} />
        </>
      )}
    </div>
  );
};

export default ImageDisplay;
