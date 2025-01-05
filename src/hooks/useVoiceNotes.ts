import { useState } from 'react';
import { SOAPNote } from '../types/soap';

export function useVoiceNotes() {
  const [notes, setNotes] = useState<Partial<SOAPNote>[]>([]);

  const addNote = (note: Partial<SOAPNote>) => {
    setNotes(prev => [note, ...prev]);
    return note;
  };

  return {
    notes,
    addNote
  };
}