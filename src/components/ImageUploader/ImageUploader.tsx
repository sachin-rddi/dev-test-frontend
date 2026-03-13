import { useState } from "react";
import UploadButton from "../Buttons/UploadButton";
import ImageDisplay from "../ImageDisplay/ImageDisplay";

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
      <ImageDisplay
        filePreview={filePreview}
        fileName={fileName}
        setSeeDefectResults={setSeeDefectResults}
        seeDefectResults={seeDefectResults}
      />
      {/*<DefectDetectionButton /> --- IGNORE ---*/}
    </div>
  );
};

export default ImageUploader;
