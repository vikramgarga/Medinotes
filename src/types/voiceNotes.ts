export interface VoiceNote {
  id: string;
  timestamp: string;
  transcript: string;
  summary: string;
  type: 'doctor' | 'patient';
}

export interface VoiceNoteDisplay {
  note: VoiceNote;
  showFullTranscript?: boolean;
}