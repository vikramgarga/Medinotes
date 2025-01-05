import { SOAPNote } from '../types/soap';

// Keywords and phrases commonly associated with each SOAP section
const SECTION_KEYWORDS = {
  subjective: [
    'patient reports', 'complains of', 'states', 'describes', 'feels',
    'denies', 'admits to', 'reports that', 'mentioned', 'concerned about',
    'experiencing', 'says', 'noticed', 'started', 'history'
  ],
  objective: [
    'vital signs', 'blood pressure', 'temperature', 'pulse', 'weight',
    'examination reveals', 'observed', 'auscultation', 'palpation',
    'inspection shows', 'measured', 'found', 'noted', 'appears'
  ],
  assessment: [
    'assessment', 'impression', 'diagnosis', 'likely', 'probable',
    'consistent with', 'suggests', 'indicates', 'appears to be',
    'differential includes', 'condition', 'suspected'
  ],
  plan: [
    'plan', 'recommend', 'prescribe', 'advised', 'scheduled',
    'ordered', 'refer', 'follow up', 'continue', 'start',
    'increase', 'decrease', 'monitor', 'return in'
  ]
};

function identifySection(sentence: string): keyof typeof SECTION_KEYWORDS | null {
  const scores = Object.entries(SECTION_KEYWORDS).map(([section, keywords]) => {
    const score = keywords.reduce((acc, keyword) => {
      return acc + (sentence.toLowerCase().includes(keyword) ? 1 : 0);
    }, 0);
    return { section, score };
  });

  const highestScore = Math.max(...scores.map(s => s.score));
  if (highestScore === 0) return null;

  return scores.find(s => s.score === highestScore)?.section as keyof typeof SECTION_KEYWORDS;
}

export function processTranscriptToSOAP(transcript: string): Partial<SOAPNote> {
  const sections: Partial<SOAPNote> = {
    subjective: '',
    objective: '',
    assessment: '',
    plan: ''
  };

  if (!transcript) return sections;

  // Split into sentences
  const sentences = transcript
    .replace(/([.!?])\s*(?=[A-Z])/g, "$1|")
    .split("|")
    .map(s => s.trim())
    .filter(s => s.length > 0);

  // Process each sentence
  sentences.forEach(sentence => {
    const section = identifySection(sentence);
    if (section) {
      sections[section] = sections[section] 
        ? `${sections[section]} ${sentence}`
        : sentence;
    } else {
      // If no clear section is identified, try to infer from context
      // Default to assessment if unclear
      sections.assessment = sections.assessment 
        ? `${sections.assessment} ${sentence}`
        : sentence;
    }
  });

  // Clean up and format each section
  Object.keys(sections).forEach(key => {
    const sectionKey = key as keyof typeof sections;
    if (sections[sectionKey]) {
      sections[sectionKey] = sections[sectionKey]?.trim();
    }
  });

  return {
    ...sections,
    timestamp: new Date().toLocaleString(),
    id: Date.now().toString()
  };
}