import { MedicalDocument } from '../../types/medical';

export const patientRecords: Record<string, MedicalDocument[]> = {
  "P123456": [
    {
      id: "LAB001",
      type: "lab",
      title: "HbA1c Test",
      date: "2024-02-15",
      summary: "HbA1c level at 7.2%, showing moderate glycemic control",
      content: "Detailed blood sugar analysis shows improvement from previous readings. Fasting glucose: 130 mg/dL"
    },
    {
      id: "DIAG001",
      type: "diagnosis",
      title: "Diabetes Follow-up",
      date: "2024-02-15",
      summary: "Blood sugar levels stabilizing with current medication regime",
      content: "Patient showing good compliance with medication and diet recommendations. Regular exercise routine maintained."
    }
  ],
  "P123457": [
    {
      id: "LAB002",
      type: "lab",
      title: "Thyroid Function Test",
      date: "2024-03-01",
      summary: "TSH levels normalized with current medication",
      content: "TSH: 2.8 mIU/L (Normal range: 0.4-4.0 mIU/L). T3 and T4 within normal limits."
    }
  ],
  "P123458": [
    {
      id: "LAB003",
      type: "lab",
      title: "Pulmonary Function Test",
      date: "2024-01-15",
      summary: "Mild obstruction noted, responsive to bronchodilators",
      content: "FEV1/FVC ratio shows mild obstruction. Good bronchodilator response."
    }
  ],
  "P123459": [
    {
      id: "LAB004",
      type: "lab",
      title: "Lipid Profile",
      date: "2024-02-20",
      summary: "Elevated LDL cholesterol, started on statins",
      content: "Total Cholesterol: 245 mg/dL, LDL: 160 mg/dL, HDL: 42 mg/dL, Triglycerides: 180 mg/dL"
    }
  ],
  "P123460": [
    {
      id: "DIAG003",
      type: "diagnosis",
      title: "GERD Evaluation",
      date: "2023-12-01",
      summary: "Moderate gastroesophageal reflux disease",
      content: "Patient reports significant improvement with current medication. Advised to continue lifestyle modifications."
    }
  ],
  "P123461": [
    {
      id: "LAB006",
      type: "lab",
      title: "Thyroid Function Test",
      date: "2024-03-01",
      summary: "TSH levels within normal range with current medication",
      content: "TSH: 3.2 mIU/L (Normal range: 0.4-4.0 mIU/L). T3 and T4 within normal limits. Continue current medication."
    },
    {
      id: "DIAG002",
      type: "diagnosis",
      title: "Annual Health Check",
      date: "2024-02-15",
      summary: "Overall health status good, thyroid condition well-managed",
      content: "Patient maintaining healthy lifestyle. Regular exercise routine. No new symptoms reported."
    }
  ]
};