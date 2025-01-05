import { Stethoscope } from 'lucide-react';

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Stethoscope className="w-8 h-8" />
      <span className="text-2xl font-bold">MediNotes</span>
    </div>
  );
}