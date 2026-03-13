import { useState } from "react";
import UploadButton from "../Buttons/UploadButton";
import ImageDisplay from "../ImageDisplay/ImageDisplay";
import ResultsButton from "../Buttons/ResultsButton";
import FormatDefectResults, {
  type Defect,
} from "../DefectResults/FormatDefectResults";
import { randomDefects } from "../../constants/ApiResponse";

const ImageUploader = () => {
  const [fileName, setFileName] = useState("");
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [seeDefectResults, setSeeDefectResults] = useState(false);
  const [defectResults, setDefectResults] = useState<Defect[] | null>(null);

  function handleResultsButtonClick() {
    setDefectResults(randomDefects());
    setSeeDefectResults(true);
  }

  return (
    <div>
      <UploadButton
        setFileName={setFileName}
        setFilePreview={setFilePreview}
        setSeeDefectResults={setSeeDefectResults}
      />
      <ImageDisplay filePreview={filePreview} fileName={fileName} />
      <ResultsButton
        label="View Results"
        onClick={handleResultsButtonClick}
        visibilityCondition={Boolean(filePreview)}
        children={
          seeDefectResults && <FormatDefectResults results={defectResults} />
        }
      />
    </div>
  );
};

export default ImageUploader;
