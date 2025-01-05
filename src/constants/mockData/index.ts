export * from './patients';
export * from './patientProfiles';
export * from './medicalRecords';
export * from './doctors';

export const generatePatientSummary = (patientId: string): string => {
  switch (patientId) {
    case "P123456":
      return "Type 2 diabetic patient with controlled hypertension. Regular follow-ups show stable condition with current medication regime. Diet and exercise compliance is good.";
    case "P123457":
      return "Hypothyroid patient responding well to medication. Regular monitoring shows normalized thyroid function. No adverse effects reported.";
    case "P123458":
      return "Generally healthy individual with mild seasonal allergies. Regular health checkups show all parameters within normal range.";
    default:
      return "No summary available";
  }
};