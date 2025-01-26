import { useState } from 'react';
import { SOAPNote, SOAPSection } from '../../../types/soap';
import { Clock, Share2, Send } from 'lucide-react';
import { SharePrescriptionModal } from './SharePrescriptionModal';

interface SOAPNoteDisplayProps {
  note: Partial<SOAPNote>;
}

const sectionTitles: Record<SOAPSection, string> = {
  subjective: 'Subjective - Patient\'s Perspective',
  objective: 'Objective - Clinical Observations',
  assessment: 'Assessment - Clinical Analysis',
  plan: 'Plan - Treatment Strategy'
};

export function SOAPNoteDisplay({ note }: SOAPNoteDisplayProps) {
  const [showShareModal, setShowShareModal] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-gray-500">
          <Clock className="w-4 h-4" />
          <span className="text-sm">{note.timestamp}</span>
        </div>
        <button
          onClick={() => setShowShareModal(true)}
          className="flex items-center gap-2 text-[#07404b] hover:text-[#bcdc49] transition-colors"
        >
          <Share2 className="w-4 h-4" />
          <span className="text-sm">Share Prescription</span>
        </button>
      </div>

      <div className="space-y-6">
        {(Object.keys(sectionTitles) as SOAPSection[]).map((section) => (
          note[section] && (
            <div key={section} className="border-b border-gray-100 pb-4">
              <h4 className="font-medium text-[#07404b] mb-2">
                {sectionTitles[section]}
              </h4>
              <p className="text-gray-700 whitespace-pre-wrap">
                {note[section]}
              </p>
            </div>
          )
        ))}
      </div>

      {showShareModal && (
        <SharePrescriptionModal
          prescription={note.rawTranscript || ''}
          onClose={() => setShowShareModal(false)}
        />
      )}
    </div>
  );
}