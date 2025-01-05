import { Users as UsersIcon, Brain, Clock } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';

const userTypes = [
  {
    icon: <UsersIcon className="w-12 h-12 text-[#07404b]" />,
    title: "Healthcare Providers",
    description: "Focus on patient care while we handle the documentation. Access comprehensive patient records instantly.",
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80&w=1000"
  },
  {
    icon: <Brain className="w-12 h-12 text-[#07404b]" />,
    title: "Hospitals & Clinics",
    description: "Streamline operations and enhance collaboration between departments for better patient outcomes.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000"
  },
  {
    icon: <Clock className="w-12 h-12 text-[#07404b]" />,
    title: "Patients",
    description: "Stay informed about your health journey with easy access to your complete medical history.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000"
  }
];

export function Users() {
  return (
    <Section id="users">
      <SectionTitle>Who It's For</SectionTitle>
      <div className="grid md:grid-cols-3 gap-8">
        {userTypes.map(({ icon, title, description, image }) => (
          <div key={title} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img 
              src={image} 
              alt={title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="mb-4">{icon}</div>
              <h3 className="text-xl font-bold mb-4 text-[#07404b]">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}