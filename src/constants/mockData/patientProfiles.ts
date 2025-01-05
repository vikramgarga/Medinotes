import { PatientProfile } from '../../types/medical';

export const patientProfiles: Record<string, PatientProfile> = {
  "P123456": {
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
        name: "Telmisartan",
        dosage: "40mg",
        frequency: "Once daily",
        startDate: "2022-03-01"
      }
    ],
    allergies: [
      {
        allergen: "Sulfa drugs",
        severity: "severe",
        reaction: "Skin rash"
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
  "P123457": {
    id: "P123457",
    name: "Priya Sharma",
    age: 32,
    dateOfBirth: "1991-08-23",
    gender: "Female",
    bloodType: "O+",
    photoUrl: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=400&h=400&fit=crop",
    height: "162 cm",
    weight: "58 kg",
    medications: [
      {
        name: "Levothyroxine",
        dosage: "25mcg",
        frequency: "Once daily",
        startDate: "2023-06-10"
      }
    ],
    allergies: [],
    comorbidities: [
      {
        condition: "Hypothyroidism",
        diagnosedDate: "2023-06-01",
        status: "managed"
      }
    ]
  },
  "P123458": {
    id: "P123458",
    name: "Amit Patel",
    age: 28,
    dateOfBirth: "1995-12-03",
    gender: "Male",
    bloodType: "A+",
    photoUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&fit=crop",
    height: "170 cm",
    weight: "65 kg",
    medications: [
      {
        name: "Montelukast",
        dosage: "10mg",
        frequency: "Once daily",
        startDate: "2024-01-15"
      }
    ],
    allergies: [
      {
        allergen: "Dust mites",
        severity: "moderate",
        reaction: "Asthma symptoms"
      }
    ],
    comorbidities: [
      {
        condition: "Bronchial Asthma",
        diagnosedDate: "2024-01-10",
        status: "managed"
      }
    ]
  },
  "P123459": {
    id: "P123459",
    name: "Meera Deshmukh",
    age: 52,
    dateOfBirth: "1971-11-28",
    gender: "Female",
    bloodType: "AB+",
    photoUrl: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop",
    height: "158 cm",
    weight: "68 kg",
    medications: [
      {
        name: "Atorvastatin",
        dosage: "20mg",
        frequency: "Once daily",
        startDate: "2023-08-15"
      }
    ],
    allergies: [
      {
        allergen: "Aspirin",
        severity: "moderate",
        reaction: "Urticaria"
      }
    ],
    comorbidities: [
      {
        condition: "Dyslipidemia",
        diagnosedDate: "2023-08-01",
        status: "active"
      }
    ]
  },
  "P123460": {
    id: "P123460",
    name: "Arjun Iyer",
    age: 63,
    dateOfBirth: "1960-07-05",
    gender: "Male",
    bloodType: "O-",
    photoUrl: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=400&h=400&fit=crop",
    height: "168 cm",
    weight: "72 kg",
    medications: [
      {
        name: "Pantoprazole",
        dosage: "40mg",
        frequency: "Once daily",
        startDate: "2023-12-01"
      }
    ],
    allergies: [],
    comorbidities: [
      {
        condition: "GERD",
        diagnosedDate: "2023-12-01",
        status: "managed"
      }
    ]
  },
  "P123461": {
    id: "P123461",
    name: "Vidya Panvelkar",
    age: 35,
    dateOfBirth: "1989-04-12",
    gender: "Female",
    bloodType: "AB+",
    photoUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
    height: "165 cm",
    weight: "62 kg",
    medications: [
      {
        name: "Levothyroxine",
        dosage: "50mcg",
        frequency: "Once daily",
        startDate: "2023-08-15"
      }
    ],
    allergies: [
      {
        allergen: "Shellfish",
        severity: "moderate",
        reaction: "Hives and nausea"
      }
    ],
    comorbidities: [
      {
        condition: "Hypothyroidism",
        diagnosedDate: "2023-08-01",
        status: "managed"
      }
    ]
  }
};