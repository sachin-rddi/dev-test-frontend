import { useState, type ChangeEvent } from "react";
import UploadButton from "../Buttons/UploadButton";
import ImageDisplay from "../ImageDisplay/ImageDisplay";
import ResultsButton from "../Buttons/ResultsButton";
import FormatDefectResults, {
  type Defect,
} from "../DefectResults/FormatDefectResults";
import { randomDefects } from "../../constants/ApiResponse";

const ImageUploader = () => {
  const [filename, setFilename] = useState("");
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [seeDefectResults, setSeeDefectResults] = useState(false);
  const [defectResults, setDefectResults] = useState<Defect[] | null>(null);

  function handleGenerateResults() {
    setDefectResults(randomDefects());
    setSeeDefectResults(true);
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFilename(selectedFile.name);
      setFilePreview(URL.createObjectURL(selectedFile));
      setSeeDefectResults(false);
    }
  };

  return (
    <div>
      <UploadButton label="Choose Image" onClick={handleFileChange} />
      <ImageDisplay image={filePreview} filename={filename} />
      <ResultsButton
        label="Detect Defects"
        onClick={handleGenerateResults}
        visibilityCondition={Boolean(filePreview)}
        children={
          seeDefectResults && <FormatDefectResults results={defectResults} />
        }
      />
    </div>
  );
};

export default ImageUploader;
