import { VoiceNote } from '../../../types/voiceNotes';
import { VoiceNoteCard } from './VoiceNoteCard';

interface VoiceNoteListProps {
  notes: VoiceNote[];
  title: string;
}

export function VoiceNoteList({ notes, title }: VoiceNoteListProps) {
  if (notes.length === 0) return null;

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-[#07404b] mb-4">{title}</h3>
      <div className="space-y-4">
        {notes.map(note => (
          <VoiceNoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
}