import { useCallback } from 'react';
import { MedicalDocument } from '../types/medical';
import { mockPatientHistory } from '../constants/mockData';

export function useAudioNotes() {
  const addNote = useCallback((note: MedicalDocument) => {
    // In a real app, this would make an API call
    // For now, we'll just add to our mock data
    mockPatientHistory.documents.unshift(note);
  }, []);

  return { addNote };
}