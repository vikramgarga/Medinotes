import { ChevronRight } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { BENEFITS } from '../../constants/content';

export function Benefits() {
  return (
    <Section id="benefits" className="bg-[#07404b] text-white">
      <SectionTitle className="text-white">Benefits</SectionTitle>
      <div className="grid md:grid-cols-2 gap-8">
        {BENEFITS.map((benefit, index) => (
          <div key={index} className="flex items-center space-x-4">
            <ChevronRight className="w-6 h-6 text-[#bcdc49]" />
            <span className="text-lg">{benefit}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}