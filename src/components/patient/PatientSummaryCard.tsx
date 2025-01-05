interface PatientSummaryCardProps {
  patient: {
    id: string;
    name: string;
    photoUrl: string;
    lastVisit: string;
  };
  onClick: () => void;
}

export function PatientSummaryCard({ patient, onClick }: PatientSummaryCardProps) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-left group"
    >
      <div className="flex items-center gap-4">
        <img
          src={patient.photoUrl}
          alt={patient.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="font-medium text-lg text-[#07404b] group-hover:text-[#bcdc49]">
            {patient.name}
          </h3>
          <p className="text-sm text-gray-500">ID: {patient.id}</p>
          <p className="text-sm text-gray-500 mt-1">
            Last Visit: {patient.lastVisit}
          </p>
        </div>
      </div>
    </button>
  );
}