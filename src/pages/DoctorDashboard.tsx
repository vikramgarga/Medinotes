import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { mockPatients } from '../constants/mockData/patients';
import { PatientSummaryCard } from '../components/patient/PatientSummaryCard';
import { DoctorNavigation } from '../components/navigation/DoctorNavigation';

export function DoctorDashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  
  const filteredPatients = mockPatients.filter(patient => 
    patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePatientClick = (patientId: string) => {
    // Navigate to the specific patient's history using their ID
    navigate(`/patient/${patientId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <DoctorNavigation />
        
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search patients by name or ID..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#07404b]"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPatients.map(patient => (
            <PatientSummaryCard 
              key={patient.id}
              patient={patient}
              onClick={() => handlePatientClick(patient.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}