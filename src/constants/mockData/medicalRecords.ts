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
      id: "LAB001",
      type: "lab",
      title: "Kidney Function Test",
      date: "2024-05-22",
      summary: "Creatinine and BUN levels normal, eGFR stable",
      content: "Detailed Kidney Function Test"
    },
    {
      id: "LAB001",
      type: "lab",
      title: "Lipid Panel",
      date: "2024-04-09",
      summary: "Cholesterol levels within target range, triglycerides slightly elevated",
      content: "Lipid Panel Report Body"
    },
    {
      id: "LAB001",
      type: "lab",
      title: "Fasting plasma glucose (FPG) test",
      date: "2024-01-02",
      summary: "Blood sugar level after fasting for at least 8 hours is within expected ranges",
      content: "Fasting plasma glucose (FPG) test"
    },
    {
      id: "LAB001",
      type: "lab",
      title: "C-peptide test",
      date: "2025-01-26",
      summary: "C-peptide levels in the urine sample are within normal ranges. C-peptide is a hormone produced by your pancreas that helps move blood sugar into your cells.",
      content: ""
    },
    {
      id: "DIAG001",
      type: "scan",
      title: "ECG",
      date: "2024-09-18",
      summary: "Normal sinus rhythm, no ST-T wave changes",
      content: "Patient showing good compliance with medication and diet recommendations. Regular exercise routine maintained."
    },
    {
      id: "DIAG001",
      type: "scan",
      title: "Chest X-Ray",
      date: "2024-10-11",
      summary: "Clear lung fields, normal heart size, no acute findings",
      content: "Patient showing good compliance with medication and diet recommendations. Regular exercise routine maintained."
    },
    {
      id: "DIAG001",
      type: "scan",
      title: "Abdominal Ultrasound",
      date: "2024-10-27",
      summary: "Normal liver texture, no gallstones, kidneys appear normal",
      content: "Patient showing good compliance with medication and diet recommendations. Regular exercise routine maintained."
    },
    {
      id: "DIAG001",
      type: "diagnosis",
      title: "Cardiovascular Risk Assessment",
      date: "2024-01-03",
      summary: "Moderate risk, continuing current management plan",
      content: "Patient showing good compliance with medication and diet recommendations. Regular exercise routine maintained."
    },
    {
      
      id: "DIAG001",
      type: "diagnosis",
      title: "Hypertension Follow-up",
      date: "2024-08-20",
      summary: "Blood pressure controlled with current medication",
      content: "Patient showing good compliance with medication and diet recommendations. Regular exercise routine maintained."
    },
    {
      id: "DIAG001",
      type: "prescription",
      title: "Metformin",
      date: "2024-02-15",
      summary: "Blood sugar levels stabilizing with current medication regime",
      content: "Patient showing good compliance with medication and diet recommendations. Regular exercise routine maintained."
    },
    {
      id: "DIAG001",
      type: "other",
      title: "Previous Doctor Notes",
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