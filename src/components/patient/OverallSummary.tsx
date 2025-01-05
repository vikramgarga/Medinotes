import { Brain } from 'lucide-react';

interface OverallSummaryProps {
  summary: string;
}

export function OverallSummary({ summary }: OverallSummaryProps) {
  return (
    <div className="bg-[#c6e5de] rounded-lg p-6 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Brain className="w-6 h-6 text-[#07404b]" />
        <h2 className="text-xl font-semibold text-[#07404b]">AI-Generated Summary</h2>
      </div>
      <p className="text-gray-700">{summary}</p>
    </div>
  );
}