import { useState } from 'react';
import { AudioRecorder } from './AudioRecorder';
import { TranscriptionDisplay } from './TranscriptionDisplay';
import { useVoiceNotes } from '../../../hooks/useVoiceNotes';
import { VoiceNoteList } from '../VoiceNotes/VoiceNoteList';

export function AudioNoteEntry() {
  const [isProcessing, setIsProcessing] = useState(false);
  const { addNote, getNotesByType } = useVoiceNotes();
  const patientNotes = getNotesByType('patient');

  const handleRecordingComplete = async (transcript: string) => {
    setIsProcessing(true);
    try {
      addNote(transcript, 'patient');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-[#07404b] mb-4">Record Voice Note</h3>
        <AudioRecorder onRecordingComplete={handleRecordingComplete} />
        <TranscriptionDisplay isProcessing={isProcessing} />
      </div>

      <VoiceNoteList 
        notes={patientNotes} 
        title="Patient Voice Notes" 
      />
    </div>
  );
}