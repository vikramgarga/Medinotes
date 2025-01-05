import { UserRole } from '../../types/auth';
import { UserCircle2, Heart, Stethoscope } from 'lucide-react';

interface RoleSelectionProps {
  onRoleSelect: (role: UserRole) => void;
}

const roles = [
  {
    id: 'doctor',
    title: 'Healthcare Provider',
    icon: Stethoscope,
    description: 'Access patient records with intelligent insights and voice-enabled documentation',
    features: [
      'Smart clinical documentation',
      'Voice-to-text note taking',
      'Comprehensive patient insights'
    ],
    color: 'bg-blue-50 hover:bg-blue-100'
  },
  {
    id: 'patient',
    title: 'Patient',
    icon: UserCircle2,
    description: 'Track your health journey with personalized insights and easy access to records',
    features: [
      'Complete medical history',
      'Personalized health insights',
      'Secure record access'
    ],
    color: 'bg-green-50 hover:bg-green-100'
  },
  {
    id: 'caregiver',
    title: 'Caregiver',
    icon: Heart,
    description: 'Monitor and coordinate patient care with intelligent assistance',
    features: [
      'Care coordination tools',
      'Health tracking assistance',
      'Medication reminders'
    ],
    color: 'bg-purple-50 hover:bg-purple-100'
  }
] as const;

export function RoleSelection({ onRoleSelect }: RoleSelectionProps) {
  return (
    <div id="role-selection" className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {roles.map(({ id, title, icon: Icon, description, features, color }) => (
        <button
          key={id}
          onClick={() => onRoleSelect(id)}
          className={`flex flex-col p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 ${color} border border-gray-200`}
        >
          <Icon className="w-12 h-12 text-[#07404b] mb-4" />
          <h3 className="text-xl font-semibold text-[#07404b] mb-2">{title}</h3>
          <p className="text-gray-600 text-left mb-4">{description}</p>
          <ul className="text-sm text-gray-500 text-left space-y-2 mt-auto">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="w-1.5 h-1.5 bg-[#bcdc49] rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        </button>
      ))}
    </div>
  );
}