import styles from "./ImageDisplay.module.scss";

const ImageDisplay = ({
  image,
  filename,
}: {
  image: string | null;
  filename: string;
}) => {
  return (
    <div className={styles.previewContainer}>
      {image && (
        <>
          <p className={styles.previewTitle}>Selected Image: {filename}</p>
          <img src={image} alt="Preview" className={styles.previewImage} />
        </>
      )}
    </div>
  );
};

export default ImageDisplay;
