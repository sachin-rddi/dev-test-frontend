import type { Defect } from "../components/DefectResults/FormatDefectResults";
import { DefectType } from "../enums";

const randomInteger = () => Math.floor(Math.random() * 500);

const defectTypes = [DefectType.EROSION, DefectType.CRACK, DefectType.UNKNOWN];

const randomDefects = (): Defect[] => {
  const defectArray: Defect[] = [];

  const randomDefectCount = Math.floor(Math.random() * 3);
  for (let i = 0; i <= randomDefectCount; i++) {
    defectArray.push({
      x: randomInteger(),
      y: randomInteger(),
      width: randomInteger(),
      height: randomInteger(),
      type: defectTypes[Math.floor(Math.random() * defectTypes.length)],
    });
  }
  return defectArray;
};

export { randomDefects };
