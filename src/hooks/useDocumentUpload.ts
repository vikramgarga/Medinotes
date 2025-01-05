import { useState } from 'react';
import { MedicalDocument, DocumentType } from '../types/medical';
import { patientRecords } from '../constants/mockData/medicalRecords';
import { classifyDocument } from '../utils/documentClassifier';

export function useDocumentUpload(patientId: string) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uploadDocument = async (file: File, type: DocumentType, title: string) => {
    setUploading(true);
    setError(null);

    try {
      // Read file content
      const content = await readFileContent(file);
      
      // Create new document
      const newDocument: MedicalDocument = {
        id: `DOC${Date.now()}`,
        type,
        title,
        date: new Date().toISOString().split('T')[0],
        summary: generateSummary(content),
        content,
        fileName: file.name
      };

      // Add to mock records
      if (!patientRecords[patientId]) {
        patientRecords[patientId] = [];
      }
      patientRecords[patientId].unshift(newDocument);

      return newDocument;
    } catch (err) {
      setError('Failed to upload document. Please try again.');
      throw err;
    } finally {
      setUploading(false);
    }
  };

  return {
    uploadDocument,
    uploading,
    error
  };
}

// Helper function to read file content
async function readFileContent(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target?.result as string);
    reader.onerror = (e) => reject(e);
    
    if (file.type.includes('image')) {
      // For images, we'll create a structured description
      resolve(`Image Analysis:\n- Type: ${file.type}\n- Size: ${formatFileSize(file.size)}\n- Name: ${file.name}`);
    } else {
      reader.readAsText(file);
    }
  });
}

// Helper function to generate a summary
function generateSummary(content: string): string {
  const firstLines = content.split('\n')
    .filter(line => line.trim())
    .slice(0, 2)
    .join(' ');
  return firstLines.length > 200 ? firstLines.slice(0, 197) + '...' : firstLines;
}

// Helper function to format file size
function formatFileSize(bytes: number): string {
  if (bytes < 1024) return bytes + ' bytes';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}