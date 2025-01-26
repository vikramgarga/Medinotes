import { PatientHistory, DocumentType } from '../types/medical';

// Mock patient data
export const mockPatientHistory: PatientHistory = {
  patient: {
    id: "P123456",
    name: "Shridevi Ramalullu",
    age: 45,
    dateOfBirth: "1978-05-15",
    gender: "Male",
    bloodType: "B+",
    photoUrl: "https://images.unsplash.com/photo-1522643527310-7222a3f57bb1?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    height: "175 cm",
    weight: "78 kg",
    medications: [
      {
        name: "Metformin",
        dosage: "1000mg",
        frequency: "Twice daily",
        startDate: "2022-01-15"
      },
      {
        name: "Lisinopril",
        dosage: "10mg",
        frequency: "Once daily",
        startDate: "2022-03-01"
      }
    ],
    allergies: [
      {
        allergen: "Penicillin",
        severity: "severe",
        reaction: "Anaphylaxis"
      },
      {
        allergen: "Pollen",
        severity: "mild",
        reaction: "Seasonal rhinitis"
      }
    ],
    comorbidities: [
      {
        condition: "Type 2 Diabetes",
        diagnosedDate: "2020-05-15",
        status: "managed"
      },
      {
        condition: "Hypertension",
        diagnosedDate: "2021-02-10",
        status: "active"
      }
    ],    
  },
  overallSummary: "Patient has well-controlled type 2 diabetes and hypertension. Regular monitoring shows stable condition with current medication regimen. Recent lab results indicate improved glycemic control. Preventive care is up to date.",
  documents: [
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
  ]
};

// Mock patients list for doctor's dashboard
export const mockPatients = [
  {
    id: "P123456",
    name: "Rajesh Kumar",
    photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop",
    lastVisit: "2024-03-15"
  },
  {
    id: "P123457",
    name: "Mamta Thakar",
    photoUrl: "https://images.unsplash.com/photo-1522643527310-7222a3f57bb1?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    lastVisit: "2024-03-14"
  },
  {
    id: "P123458",
    name: "Amit Patel",
    photoUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&fit=crop",
    lastVisit: "2024-03-13"
  }
];