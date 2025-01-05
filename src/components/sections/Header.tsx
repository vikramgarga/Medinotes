import { Logo } from '../ui/Logo';
import { Navigation } from '../navigation/Navigation';
import { Mic, FileText, Brain } from 'lucide-react';

const features = [
  { icon: <Mic className="w-5 h-5" />, text: "Voice-to-Text Medical Notes" },
  { icon: <FileText className="w-5 h-5" />, text: "Instant Prescription Generation" },
  { icon: <Brain className="w-5 h-5" />, text: "AI-Powered Health Analytics" }
];

export function Header() {
  return (
    <header className="bg-[#07404b] text-white">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />
        <Navigation />
      </div>
      
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">
              Transform Patient Care with Voice-Enabled Records
            </h1>
            <p className="text-xl mb-8">
              Spend more time with patients, less time on paperwork. Convert voice to text instantly, 
              generate prescriptions automatically, and get AI-powered insights for better healthcare decisions.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 text-[#bcdc49]">
                  {feature.icon}
                  <span className="text-white">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
              alt="Doctor using voice recognition technology"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </header>
  );
}