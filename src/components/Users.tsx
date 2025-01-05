import { Users, Brain, Clock } from 'lucide-react';

const userTypes = [
  {
    icon: <Users className="w-12 h-12 text-[#07404b]" />,
    title: "Healthcare Providers",
    description: "Access AI-assisted patient records instantly and get intelligent clinical decision support."
  },
  {
    icon: <Brain className="w-12 h-12 text-[#07404b]" />,
    title: "Hospitals & Clinics",
    description: "Leverage AI analytics to streamline operations and improve patient care outcomes."
  },
  {
    icon: <Clock className="w-12 h-12 text-[#07404b]" />,
    title: "Patients",
    description: "Smart health tracking and AI-powered insights into your medical history."
  }
];

export function Users() {
  return (
    <section id="users" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#07404b] mb-12 text-center">Who It's For</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {userTypes.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-[#07404b]">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}