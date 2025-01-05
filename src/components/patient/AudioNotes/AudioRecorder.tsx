import { useState, useCallback, useRef } from 'react';
import { Mic, Square, Loader } from 'lucide-react';
import { useSpeechToText } from '../../../hooks/useSpeechToText';

interface AudioRecorderProps {
  onRecordingComplete: (transcript: string) => void;
}

export function AudioRecorder({ onRecordingComplete }: AudioRecorderProps) {
  const [isRecording, setIsRecording] = useState(false);
  const recognitionRef = useRef<any>(null);
  const { isListening, transcript, error, startListening, stopListening, resetTranscript } = useSpeechToText();

  const startRecording = useCallback(() => {
    setIsRecording(true);
    resetTranscript();
    recognitionRef.current = startListening();
  }, [startListening, resetTranscript]);

  const stopRecording = useCallback(() => {
    if (recognitionRef.current) {
      stopListening(recognitionRef.current);
      setIsRecording(false);
      onRecordingComplete(transcript);
      resetTranscript();
    }
  }, [stopListening, transcript, onRecordingComplete, resetTranscript]);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        {isRecording ? (
          <button
            onClick={stopRecording}
            className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            <Square className="w-5 h-5" />
            Stop Recording
          </button>
        ) : (
          <button
            onClick={startRecording}
            className="flex items-center gap-2 px-4 py-2 bg-[#07404b] text-white rounded-lg hover:bg-[#07404b]/90 transition-colors"
          >
            <Mic className="w-5 h-5" />
            Start Recording
          </button>
        )}
        {isRecording && (
          <div className="flex items-center gap-2 text-red-500">
            <Loader className="w-5 h-5 animate-spin" />
            Recording...
          </div>
        )}
      </div>

      {error && (
        <div className="text-red-500 text-sm">
          {error}
        </div>
      )}

      {transcript && (
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-700">{transcript}</p>
        </div>
      )}
    </div>
  );
}