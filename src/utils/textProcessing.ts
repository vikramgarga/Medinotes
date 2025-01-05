export function generateSummary(text: string): string {
  // Get first sentence or first 100 chars if no sentence end found
  const firstSentence = text.split(/[.!?]/)
    .filter(sentence => sentence.trim().length > 0)[0];
    
  if (!firstSentence) return text.slice(0, 100) + '...';
  return firstSentence.trim() + '...';
}

export function formatTimestamp(date: Date): string {
  return new Intl.DateTimeFormat('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short'
  }).format(date);
}