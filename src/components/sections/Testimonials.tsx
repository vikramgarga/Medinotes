import { Star } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { TESTIMONIALS } from '../../constants/content';

export function Testimonials() {
  return (
    <Section id="testimonials" className="bg-[#c6e5de]">
      <SectionTitle>Testimonials</SectionTitle>
      <div className="grid md:grid-cols-2 gap-8">
        {TESTIMONIALS.map((testimonial, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[#bcdc49] fill-current" />
              ))}
            </div>
            <p className="text-gray-600 mb-4">{testimonial.content}</p>
            <div>
              <p className="font-bold text-[#07404b]">{testimonial.name}</p>
              <p className="text-gray-500">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}