export type DocumentType = 'lab' | 'scan' | 'prescription' | 'diagnosis' | 'other';

export interface Medication {
  name: string;
  dosage: string;
  frequency: string;
  startDate: string;
  endDate?: string;
}

export interface Allergy {
  allergen: string;
  severity: 'mild' | 'moderate' | 'severe';
  reaction: string;
}

export interface Comorbidity {
  condition: string;
  diagnosedDate: string;
  status: 'active' | 'managed' | 'resolved';
}

export interface PatientProfile {
  id: string;
  name: string;
  age: number;
  dateOfBirth: string;
  gender: string;
  bloodType: string;
  photoUrl: string;
  height: string;
  weight: string;
  medications: Medication[];
  allergies: Allergy[];
  comorbidities: Comorbidity[];
}

export interface MedicalDocument {
  id: string;
  type: DocumentType;
  title: string;
  date: string;
  summary: string;
  content: string;
  fileName?: string;
}

export interface PatientHistory {
  patient: PatientProfile;
  overallSummary: string;
  documents: MedicalDocument[];
}