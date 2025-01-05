import { useState } from 'react';
import { ChevronDown, ChevronUp, Mic } from 'lucide-react';
import { VoiceNote } from '../../../types/voiceNotes';

interface VoiceNoteCardProps {
  note: VoiceNote;
}

export function VoiceNoteCard({ note }: VoiceNoteCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <Mic className="w-4 h-4 text-[#07404b]" />
          <span className="text-sm text-gray-500">{note.timestamp}</span>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-[#07404b] hover:text-[#bcdc49] transition-colors"
        >
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>
      
      <div className="text-gray-700">
        {expanded ? note.transcript : note.summary}
      </div>
    </div>
  );
}