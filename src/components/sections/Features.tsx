import { Mic, LineChart, Shield, Clock } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';

const features = [
  {
    icon: <Mic className="w-16 h-16 text-[#07404b]" />,
    title: "Voice-Enabled Documentation",
    description: "Transform your spoken words into organized clinical notes. Our intelligent system understands medical terminology and formats your voice notes into structured documentation.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000"
  },
  {
    icon: <LineChart className="w-16 h-16 text-[#07404b]" />,
    title: "Smart Analytics Dashboard",
    description: "Get instant insights into patient trends and treatment outcomes. Visual reports help you make informed decisions quickly.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1000"
  },
  {
    icon: <Shield className="w-16 h-16 text-[#07404b]" />,
    title: "Secure Health Records",
    description: "Keep patient data safe with enterprise-grade security while maintaining easy access for authorized healthcare providers.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000"
  },
  {
    icon: <Clock className="w-16 h-16 text-[#07404b]" />,
    title: "Time-Saving Automation",
    description: "Let our system handle routine documentation tasks while you focus on patient care. Smart templates and automated follow-ups keep you efficient.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000"
  }
];

export function Features() {
  return (
    <Section id="features" className="bg-[#c6e5de]">
      <SectionTitle>Powerful Features</SectionTitle>
      <div className="grid md:grid-cols-2 gap-12">
        {features.map(({ icon, title, description, image }) => (
          <div key={title} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
            <img 
              src={image} 
              alt={title}
              className="w-full h-48 object-cover"
            />
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                {icon}
                <h3 className="text-2xl font-bold text-[#07404b]">{title}</h3>
              </div>
              <p className="text-gray-600">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}