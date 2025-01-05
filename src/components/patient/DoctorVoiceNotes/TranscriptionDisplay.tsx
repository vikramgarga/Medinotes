import { Loader } from 'lucide-react';

interface TranscriptionDisplayProps {
  isProcessing: boolean;
}

export function TranscriptionDisplay({ isProcessing }: TranscriptionDisplayProps) {
  if (!isProcessing) return null;

  return (
    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
      <div className="flex items-center gap-2 text-gray-600">
        <Loader className="w-5 h-5 animate-spin" />
        <span>Processing voice note...</span>
      </div>
    </div>
  );
}