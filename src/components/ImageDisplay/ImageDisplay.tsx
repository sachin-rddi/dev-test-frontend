import styles from "./ImageDisplay.module.scss";

const ImageDisplay = ({
  image,
  filename,
  label
}: {
  image: string | null;
  filename: string;
  label?: string;
}) => {
  return (
    <div className={styles.previewContainer}>
      {image && (
        <>
          <p className={styles.previewTitle}>{label} {filename}</p>
          <img src={image} alt="Preview" className={styles.previewImage} />
        </>
      )}
    </div>
  );
};

export default ImageDisplay;
