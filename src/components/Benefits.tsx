import { ChevronRight } from 'lucide-react';

const benefits = [
  "AI-powered diagnostic assistance",
  "Intelligent patient data analysis",
  "Automated administrative tasks",
  "Smart clinical decision support",
  "Predictive healthcare insights",
  "Advanced security with AI monitoring"
];

export function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-[#07404b] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Benefits</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-4">
              <ChevronRight className="w-6 h-6 text-[#bcdc49]" />
              <span className="text-lg">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}