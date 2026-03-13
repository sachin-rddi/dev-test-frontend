import { useState } from "react";
import UploadButton from "../Buttons/UploadButton";
import ImageDisplay from "../ImageDisplay/ImageDisplay";

const ImageUploader = () => {
  const [fileName, setFileName] = useState("");
  const [filePreview, setFilePreview] = useState<string | null>(null);

  return (
    <div>
      <UploadButton setFileName={setFileName} setFilePreview={setFilePreview} />
      <ImageDisplay filePreview={filePreview} fileName={fileName} />
      {/*<DefectDetectionButton /> --- IGNORE ---*/}
    </div>
  );
};

export default ImageUploader;
