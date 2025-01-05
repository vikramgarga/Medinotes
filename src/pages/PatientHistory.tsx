import { useParams } from 'react-router-dom';
import { BackButton } from '../components/navigation/BackButton';
import { DocumentUpload } from '../components/patient/DocumentUpload';
import { DocumentList } from '../components/patient/DocumentList';
import { OverallSummary } from '../components/patient/OverallSummary';
import { PatientProfile } from '../components/patient/PatientProfile';
import { DoctorVoiceNoteEntry } from '../components/patient/DoctorVoiceNotes/DoctorVoiceNoteEntry';
import { patientProfiles } from '../constants/mockData/patientProfiles';
import { patientRecords } from '../constants/mockData/medicalRecords';
import { generatePatientSummary } from '../utils/patientSummary';

export function PatientHistory() {
  const { id } = useParams<{ id: string }>();
  const profile = id ? patientProfiles[id] : null;
  const records = id ? patientRecords[id] || [] : [];
  const summary = id ? generatePatientSummary(id) : '';

  if (!profile) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#07404b] mb-4">Patient Not Found</h1>
          <BackButton />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <BackButton />
        </div>
        
        <PatientProfile profile={profile} />
        
        <div className="flex justify-end mb-8">
          <DocumentUpload />
        </div>

        <DoctorVoiceNoteEntry />
        
        <OverallSummary summary={summary} />

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <DocumentList 
              documents={records}
              type="lab"
              title="Laboratory Tests"
            />
            <DocumentList 
              documents={records}
              type="scan"
              title="Scans & Imaging"
            />
          </div>
          <div>
            <DocumentList 
              documents={records}
              type="diagnosis"
              title="Diagnoses"
            />
            <DocumentList 
              documents={records}
              type="prescription"
              title="Prescriptions"
            />
            <DocumentList 
              documents={records}
              type="other"
              title="Other Documents"
            />
          </div>
        </div>
      </div>
    </div>
  );
}