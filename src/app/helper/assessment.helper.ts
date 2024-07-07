import { assessmentConfigs } from "../store/assessments.constants";
import { AssessmentConfig } from "../store/assessments/assessmenets.model";

export function getConfig(assessmentType: string): AssessmentConfig {
  return assessmentConfigs[assessmentType];
}