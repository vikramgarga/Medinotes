import { useState } from 'react';
import { Upload, FileText, AlertCircle } from 'lucide-react';
import { DocumentType } from '../../types/medical';

interface DocumentBasedRegistrationProps {
  onComplete: (data: any) => void;
  onBack: () => void;
}

export function DocumentBasedRegistration({ onComplete, onBack }: DocumentBasedRegistrationProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    setFiles(prev => [...prev, ...selectedFiles]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (files.length === 0) {
      setError('Please upload at least one medical document');
      return;
    }

    setUploading(true);
    setError(null);

    try {
      // In a real app, this would process the documents and extract information
      // For now, we'll simulate processing
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Mock extracted data
      const extractedData = {
        name: "Extracted from documents",
        dateOfBirth: "1990-01-01",
        gender: "female",
        bloodType: "O+",
        conditions: ["Hypertension", "Type 2 Diabetes"],
        medications: ["Metformin 500mg", "Lisinopril 10mg"],
        documents: files.map(file => ({
          name: file.name,
          type: guessDocumentType(file.name),
          date: new Date().toISOString().split('T')[0]
        }))
      };

      onComplete(extractedData);
    } catch (err) {
      setError('Failed to process documents. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
      <div className="flex flex-col items-center mb-6">
        <FileText className="w-16 h-16 text-[#07404b] mb-4" />
        <h2 className="text-2xl font-bold text-[#07404b]">Upload Medical Documents</h2>
        <p className="text-gray-600 text-center mt-2">
          Upload your medical records and we'll automatically create your profile
        </p>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <h3 className="font-medium text-blue-700 mb-2">Supported Documents:</h3>
        <ul className="text-sm text-blue-600 space-y-1">
          <li>• Hospital discharge summaries</li>
          <li>• Lab reports</li>
          <li>• Prescription records</li>
          <li>• Medical certificates</li>
          <li>• Health insurance cards</li>
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
          <label className="flex flex-col items-center cursor-pointer">
            <Upload className="w-8 h-8 text-gray-400 mb-2" />
            <span className="text-sm text-gray-600">Click to upload documents</span>
            <input
              type="file"
              className="hidden"
              multiple
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
              onChange={handleFileChange}
            />
          </label>
        </div>

        {files.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-medium text-gray-700">Uploaded Documents:</h4>
            {files.map((file, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                <span className="text-sm text-gray-600">{file.name}</span>
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="flex items-center gap-2 text-red-500">
            <AlertCircle className="w-5 h-5" />
            <span>{error}</span>
          </div>
        )}

        <div className="flex justify-between pt-4">
          <button
            type="button"
            onClick={onBack}
            className="text-[#07404b] hover:text-[#bcdc49]"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={uploading}
            className="bg-[#07404b] text-white px-6 py-2 rounded-lg hover:bg-[#07404b]/90 disabled:opacity-50"
          >
            {uploading ? 'Processing Documents...' : 'Continue'}
          </button>
        </div>
      </form>
    </div>
  );
}

function guessDocumentType(filename: string): DocumentType {
  const lower = filename.toLowerCase();
  if (lower.includes('lab') || lower.includes('test')) return 'lab';
  if (lower.includes('scan') || lower.includes('xray') || lower.includes('mri')) return 'scan';
  if (lower.includes('prescription') || lower.includes('rx')) return 'prescription';
  if (lower.includes('diagnosis') || lower.includes('report')) return 'diagnosis';
  return 'other';
}