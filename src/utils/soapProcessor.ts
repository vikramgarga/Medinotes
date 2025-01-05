import { SOAPNote } from '../types/soap';

export function processTranscriptToSOAP(transcript: string): Partial<SOAPNote> {
  const sections: Partial<SOAPNote> = {
    subjective: '',
    objective: '',
    assessment: '',
    plan: ''
  };

  if (!transcript || typeof transcript !== 'string') {
    return sections;
  }

  const words = transcript.split(' ');
  let currentSection: keyof SOAPNote | null = null;

  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase();
    
    // Check for section markers
    if (word === 'subjective' || word === 's') {
      currentSection = 'subjective';
      continue;
    } else if (word === 'objective' || word === 'o') {
      currentSection = 'objective';
      continue;
    } else if (word === 'assessment' || word === 'a') {
      currentSection = 'assessment';
      continue;
    } else if (word === 'plan' || word === 'p') {
      currentSection = 'plan';
      continue;
    }

    // Add word to current section
    if (currentSection) {
      sections[currentSection] = `${sections[currentSection] || ''} ${words[i]}`.trim();
    }
  }

  return sections;
}

export function formatSOAPNote(note: Partial<SOAPNote>): string {
  return `
SOAP Note - ${new Date().toLocaleDateString()}

Subjective:
${note.subjective || 'No subjective information provided'}

Objective:
${note.objective || 'No objective information provided'}

Assessment:
${note.assessment || 'No assessment provided'}

Plan:
${note.plan || 'No plan specified'}
`.trim();
}