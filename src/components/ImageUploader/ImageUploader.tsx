import { useState, type ChangeEvent } from "react";
import UploadButton from "@components/Buttons/UploadButton";
import ImageDisplay from "@components/ImageDisplay/ImageDisplay";
import ResultsButton from "@components/Buttons/ResultsButton";
import FormatDefectResults, {
  type Defect,
} from "@components/DefectResults/FormatDefectResults";
import { randomDefects } from "@constants/ApiResponse";

const ImageUploader = () => {
  const [filename, setFilename] = useState<string>("");
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [seeDefectResults, setSeeDefectResults] = useState<boolean>(false);
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
      <ImageDisplay
        image={filePreview}
        filename={filename}
        label="Selected Image:"
      />
      <ResultsButton
        label="Detect Defects"
        onClick={handleGenerateResults}
        visibilityCondition={Boolean(filePreview)}
      />
      {seeDefectResults && <FormatDefectResults results={defectResults} />}
    </div>
  );
};

export default ImageUploader;
