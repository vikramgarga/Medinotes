import { useState } from 'react';
import { AudioRecorder } from './AudioRecorder';
import { TranscriptionDisplay } from './TranscriptionDisplay';
import { SOAPNoteDisplay } from './SOAPNoteDisplay';
import { useVoiceNotes } from '../../../hooks/useVoiceNotes';
import { processTranscriptToSOAP } from '../../../utils/aiSoapProcessor';

export function DoctorVoiceNoteEntry() {
  const [isProcessing, setIsProcessing] = useState(false);
  const { addNote, notes } = useVoiceNotes();

  const handleRecordingComplete = async (transcript: string) => {
    setIsProcessing(true);
    try {
      const soapNote = processTranscriptToSOAP(transcript);
      const note = {
        ...soapNote,
        rawTranscript: transcript
      };
      addNote(note);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-[#07404b] mb-4">Record Medical Note</h3>
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <h4 className="text-sm font-medium text-blue-700 mb-2">
            Speak naturally about the patient's condition. Include:
          </h4>
          <ul className="list-disc ml-6 text-sm text-blue-600 space-y-1">
            <li>What the patient reports (Subjective)</li>
            <li>Your examination findings (Objective)</li>
            <li>Your diagnosis/assessment</li>
            <li>Treatment plan and next steps</li>
          </ul>
        </div>
        <AudioRecorder onRecordingComplete={handleRecordingComplete} />
        <TranscriptionDisplay isProcessing={isProcessing} />
      </div>

      <div className="space-y-4">
        {notes.map((note) => (
          <SOAPNoteDisplay key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
}