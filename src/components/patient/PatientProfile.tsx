import { Activity, Droplet, Ruler, Weight } from 'lucide-react';
import { PatientProfile as PatientProfileType } from '../../types/medical';
import { ImageUpload } from './ImageUpload';
import { useImageUpload } from '../../hooks/useImageUpload';

interface PatientProfileProps {
  profile: PatientProfileType;
}

export function PatientProfile({ profile }: PatientProfileProps) {
  const { uploadImage, uploading, error } = useImageUpload();

  const handleImageUpload = async (file: File) => {
    try {
      await uploadImage(file, profile.id);
    } catch (err) {
      console.error('Failed to upload image:', err);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <div className="flex gap-6">
        <div className="relative">
          <ImageUpload 
            currentPhotoUrl={profile.photoUrl}
            onImageUpload={handleImageUpload}
          />
          {uploading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/80 rounded-full">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#07404b]"></div>
            </div>
          )}
          {error && (
            <p className="text-red-500 text-sm mt-2">{error}</p>
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-[#07404b]">{profile.name}</h1>
              <p className="text-gray-600">MR ID: {profile.id}</p>
            </div>
            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Droplet className="w-4 h-4 text-red-500" />
                <span>{profile.bloodType}</span>
              </div>
              <div className="flex items-center gap-2">
                <Ruler className="w-4 h-4" />
                <span>{profile.height}</span>
              </div>
              <div className="flex items-center gap-2">
                <Weight className="w-4 h-4" />
                <span>{profile.weight}</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-6 mt-6">
            <div>
              <h3 className="font-semibold text-[#07404b] mb-2">Current Medications</h3>
              <ul className="space-y-2">
                {profile.medications.map((med, index) => (
                  <li key={index} className="text-sm">
                    <span className="font-medium">{med.name}</span>
                    <p className="text-gray-600">{med.dosage} - {med.frequency}</p>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-[#07404b] mb-2">Allergies</h3>
              <ul className="space-y-2">
                {profile.allergies.map((allergy, index) => (
                  <li key={index} className="text-sm">
                    <span className="font-medium">{allergy.allergen}</span>
                    <p className="text-gray-600">{allergy.reaction}</p>
                    <span className={`text-xs px-2 py-1 rounded ${
                      allergy.severity === 'severe' ? 'bg-red-100 text-red-700' :
                      allergy.severity === 'moderate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {allergy.severity}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-[#07404b] mb-2">Comorbidities</h3>
              <ul className="space-y-2">
                {profile.comorbidities.map((condition, index) => (
                  <li key={index} className="text-sm">
                    <span className="font-medium">{condition.condition}</span>
                    <p className="text-gray-600">Since: {condition.diagnosedDate}</p>
                    <span className={`text-xs px-2 py-1 rounded ${
                      condition.status === 'active' ? 'bg-red-100 text-red-700' :
                      condition.status === 'managed' ? 'bg-blue-100 text-blue-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {condition.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}