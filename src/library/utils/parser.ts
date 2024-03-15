import { ThemeColor } from "@/provider/theme";
import { RoleData } from "./constant";
import {
  CODE_ANALYSIS,
  CODE_ANALYSIS_COLOR_CODE,
  CODE_ANALYSIS_LABEL,
  COMMUNICATION,
  COMMUNICATION_COLOR_CODE,
  COMMUNICATION_LABEL,
} from "./enums";

export const getCommunicationOverview = (
  data: RoleData[0]["communication"]
) => {
  const parseData = Object.values(COMMUNICATION).map(i => ({
    color: ThemeColor[COMMUNICATION_COLOR_CODE[i]],
    value: data[i],
    label: COMMUNICATION_LABEL[i],
    tailwind: `text-${COMMUNICATION_COLOR_CODE[i].toLowerCase()}`,
  }));

  return parseData;
};

export const getCodeOverview = (data: RoleData[0]["codeScore"]) => {
  const parseData = Object.values(CODE_ANALYSIS).map(i => ({
    color: ThemeColor[CODE_ANALYSIS_COLOR_CODE[i]],
    value: data[i],
    label: CODE_ANALYSIS_LABEL[i],
    tailwind: `text-${CODE_ANALYSIS_COLOR_CODE[i].toLowerCase()}`,
  }));

  return parseData;
};
