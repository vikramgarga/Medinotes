import { Stethoscope } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#07404b] text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Stethoscope className="w-6 h-6" />
          <span className="text-xl font-bold">MediNotes</span>
        </div>
        <p>&copy; {new Date().getFullYear()} MediNotes. All rights reserved.</p>
      </div>
    </footer>
  );
}