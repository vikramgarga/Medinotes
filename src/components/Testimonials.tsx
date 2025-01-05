import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Cardiologist",
    content: "The AI-powered features in MediNotes have revolutionized my practice. The intelligent insights and automated documentation save me hours each week."
  },
  {
    name: "Michael Chen",
    role: "Hospital Administrator",
    content: "The AI analytics have transformed our operational efficiency. The predictive insights help us provide better patient care while reducing costs."
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-[#c6e5de]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#07404b] mb-12 text-center">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
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
      </div>
    </section>
  );
}