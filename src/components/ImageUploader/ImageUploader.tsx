import { useState } from "react";
import UploadButton from "../Buttons/UploadButton";
import ImageDisplay from "../ImageDisplay/ImageDisplay";
import DefectDetectionButton from "../Buttons/DefectDetectionButton";

const ImageUploader = () => {
  const [fileName, setFileName] = useState("");
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [seeDefectResults, setSeeDefectResults] = useState(false);

  return (
    <div>
      <UploadButton
        setFileName={setFileName}
        setFilePreview={setFilePreview}
        setSeeDefectResults={setSeeDefectResults}
      />
      <ImageDisplay filePreview={filePreview} fileName={fileName} />
      <DefectDetectionButton
        filePreview={filePreview}
        setSeeDefectResults={setSeeDefectResults}
        seeDefectResults={seeDefectResults}
      />
    </div>
  );
};

export default ImageUploader;
