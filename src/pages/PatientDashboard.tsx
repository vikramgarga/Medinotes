import { useAuthContext } from '../context/AuthContext';
import { mockPatientHistory } from '../constants/mockData';
import { PatientProfile } from '../components/patient/PatientProfile';
import { OverallSummary } from '../components/patient/OverallSummary';
import { DocumentList } from '../components/patient/DocumentList';
import { DocumentUpload } from '../components/patient/DocumentUpload';
import { HealthTrends } from '../components/patient/HealthTrends';
import { BackButton } from '../components/navigation/BackButton';

export function PatientDashboard() {
  const { user } = useAuthContext();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <BackButton />
        </div>

        <h1 className="text-3xl font-bold text-[#07404b] mb-8">My Health Records</h1>
        
        <PatientProfile profile={mockPatientHistory.patient} />
        <OverallSummary summary={mockPatientHistory.overallSummary} />

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-[#07404b]">Upload Medical Documents</h2>
            <DocumentUpload />
          </div>
        </div>

        <HealthTrends patientId={mockPatientHistory.patient.id} />

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <DocumentList 
              documents={mockPatientHistory.documents}
              type="lab"
              title="My Lab Results"
            />
            <DocumentList 
              documents={mockPatientHistory.documents}
              type="scan"
              title="My Scans & Imaging"
            />
          </div>
          <div>
            <DocumentList 
              documents={mockPatientHistory.documents}
              type="diagnosis"
              title="My Diagnoses"
            />
            <DocumentList 
              documents={mockPatientHistory.documents}
              type="prescription"
              title="My Prescriptions"
            />
          </div>
        </div>
      </div>
    </div>
  );
}