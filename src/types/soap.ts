export interface SOAPNote {
  id: string;
  timestamp: string;
  subjective: string;
  objective: string;
  assessment: string;
  plan: string;
  rawTranscript: string;
}

export type SOAPSection = 'subjective' | 'objective' | 'assessment' | 'plan';