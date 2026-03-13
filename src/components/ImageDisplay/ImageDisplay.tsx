const ImageDisplay = () => {
  return;
  <div className={styles.preview_container}>
    {filePreview && (
      <>
        <p className={styles["preview-title"]}>Selected Image: {fileName}</p>
        <img src={filePreview} alt="Preview" className={styles.preview} />
        <RunDefectDetectionButton />
      </>
    )}
  </div>;
};
