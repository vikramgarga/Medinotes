import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';

export function About() {
  return (
    <Section id="about" className="bg-[#c6e5de]">
      <SectionTitle>About MediNotes</SectionTitle>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80"
            alt="Doctor analyzing patient data with AI assistance"
            className="rounded-lg shadow-xl"
          />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-[#07404b] mb-4">
            AI-Enhanced Human Care
          </h3>
          <p className="text-lg mb-6">
            MediNotes combines the irreplaceable human touch of healthcare with cutting-edge AI assistance. 
            Our platform empowers healthcare providers with intelligent insights while preserving the essential 
            personal connection between doctors and patients.
          </p>
          <p className="text-lg">
            By handling routine documentation and providing smart analytics, we create more time for what matters most - 
            meaningful patient interactions. Our AI assistant works alongside healthcare providers, offering instant 
            access to patient histories, identifying patterns, and suggesting evidence-based insights.
          </p>
        </div>
      </div>
    </Section>
  );
}