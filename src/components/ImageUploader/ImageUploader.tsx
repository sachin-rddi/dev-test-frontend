import { useState, type ChangeEvent } from "react";
import UploadButton from "@components/Buttons/UploadButton";
import ImageDisplay from "@components/ImageDisplay/ImageDisplay";
import ResultsButton from "@components/Buttons/ResultsButton";
import FormatDefectResults, {
  type Defect,
} from "@components/DefectResults/FormatDefectResults";
import { getDefects } from "@constants/ApiResponse";
import LoadingText from "@components/DefectResults/LoadingDefectResults";

const ImageUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [seeDefectResults, setSeeDefectResults] = useState<boolean>(false);
  const [defectResults, setDefectResults] = useState<Defect[] | null>(null);
  const [defectResultsLoading, setDefectResultsLoading] =
    useState<boolean>(false);

  async function handleGenerateResults() {
    setSeeDefectResults(false);
    if (file) {
      setDefectResultsLoading(true);
      const results = await getDefects(file);
      await new Promise((resolve) => setTimeout(resolve, 300)); // slight delay to show loading text
      setDefectResults(results as Defect[]);
      setSeeDefectResults(true);
      setDefectResultsLoading(false);
    }
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFilePreview(URL.createObjectURL(selectedFile));
      setSeeDefectResults(false);
      setDefectResultsLoading(false);
    }
  };

  return (
    <div>
      <UploadButton label="Choose Image" onClick={handleFileChange} />
      <ImageDisplay
        image={filePreview}
        filename={file?.name ?? "NO FILE SELECTED"}
        label="Selected Image:"
      />
      <ResultsButton
        label="Detect Defects"
        onClick={handleGenerateResults}
        visibilityCondition={Boolean(filePreview)}
      />
      {!seeDefectResults && defectResultsLoading && <LoadingText />}
      {seeDefectResults && <FormatDefectResults results={defectResults} />}
    </div>
  );
};

export default ImageUploader;
