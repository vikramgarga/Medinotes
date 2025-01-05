import { DocumentType } from '../types/medical';

// Keywords associated with different document types
const DOCUMENT_PATTERNS = {
  lab: [
    /blood|glucose|hba1c|cholesterol|hdl|ldl|triglycerides|tsh|t3|t4/i,
    /hemoglobin|wbc|rbc|platelets|mcv|mch|mchc/i,
    /creatinine|urea|sodium|potassium|chloride|calcium/i,
    /test results|laboratory|analysis/i
  ],
  scan: [
    /x-ray|xray|radiograph|ct|mri|ultrasound|scan|imaging/i,
    /chest|abdomen|brain|spine|joint|bone/i,
    /radiological|radiology|contrast|enhancement/i
  ],
  prescription: [
    /prescribed|prescription|rx|dose|dosage|medication/i,
    /tablet|capsule|syrup|injection|oral|take/i,
    /daily|twice|thrice|weekly|monthly/i,
    /mg|ml|units|mcg/i
  ],
  diagnosis: [
    /diagnosis|condition|assessment|evaluation/i,
    /symptoms|signs|presenting|complained/i,
    /disease|disorder|syndrome|pathology/i,
    /chronic|acute|severe|mild|moderate/i
  ]
};

export function classifyDocument(content: string): DocumentType {
  // Calculate match scores for each type
  const scores = Object.entries(DOCUMENT_PATTERNS).map(([type, patterns]) => {
    const score = patterns.reduce((acc, pattern) => {
      return acc + (pattern.test(content) ? 1 : 0);
    }, 0);
    return { type: type as DocumentType, score };
  });

  // Find type with highest score
  const bestMatch = scores.reduce((best, current) => {
    return current.score > best.score ? current : best;
  });

  // If no good matches found, return 'other'
  return bestMatch.score > 0 ? bestMatch.type : 'other';
}