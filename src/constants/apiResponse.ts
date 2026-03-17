import axios from "axios";
import FormData from "form-data";
import type { Defect } from "@components/DefectResults/FormatDefectResults";

/**
 * Retrieves defect detection results from the defect detection API.
 * @param file - The image file to post to the defect detection API.
 * @returns The defect detection results.
 */
export const getDefects = async (file: File): Promise<Defect[]> => {
  const defectDetectionUrl = `/api/dev/dev-test-defect-detection`;

  const response = await axios.post(defectDetectionUrl, buildRequestBody(file));
  return response.data.defects;
};

/**
 * Builds the request body for the defect detection API.
 * @param file - The image file to include in the request body.
 * @returns The request body as a FormData object.
 */
const buildRequestBody = (file: File) => {
  const bodyFormData = new FormData();
  bodyFormData.append("image", file);
  return bodyFormData;
};
