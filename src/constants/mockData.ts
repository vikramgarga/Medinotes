import { PatientHistory, DocumentType } from '../types/medical';

// Mock patient data
export const mockPatientHistory: PatientHistory = {
  patient: {
    id: "P123456",
    name: "Rajesh Kumar",
    age: 45,
    dateOfBirth: "1978-05-15",
    gender: "Male",
    bloodType: "B+",
    photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop",
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
    ]
  },
  overallSummary: "Patient has well-controlled type 2 diabetes and hypertension. Regular monitoring shows stable condition with current medication regimen. Recent lab results indicate improved glycemic control. Preventive care is up to date.",
  documents: []
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
    name: "Priya Sharma",
    photoUrl: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=400&h=400&fit=crop",
    lastVisit: "2024-03-14"
  },
  {
    id: "P123458",
    name: "Amit Patel",
    photoUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&fit=crop",
    lastVisit: "2024-03-13"
  }
];