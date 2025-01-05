// Utility function to generate patient summaries
export function generatePatientSummary(patientId: string): string {
  const summaries: Record<string, string> = {
    "P123456": "Type 2 diabetic patient with controlled hypertension. Regular follow-ups show stable condition with current medication regime. Diet and exercise compliance is good.",
    "P123457": "Hypothyroid patient responding well to medication. Regular monitoring shows normalized thyroid function. No adverse effects reported.",
    "P123458": "Generally healthy individual with mild seasonal allergies. Regular health checkups show all parameters within normal range.",
    "P123459": "Patient with dyslipidemia, showing improvement with statin therapy. Regular monitoring of lipid profile recommended.",
    "P123460": "Patient with GERD, responding well to current medication and lifestyle modifications.",
    "P123461": "Hypothyroid patient with well-managed condition. Regular thyroid function tests show stable levels with current medication."
  };

  return summaries[patientId] || "No summary available";
}