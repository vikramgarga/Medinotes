import { X } from 'lucide-react';
import { MedicalDocument } from '../../../types/medical';

interface DocumentViewerProps {
  document: MedicalDocument;
  onClose: () => void;
}

export function DocumentViewer({ document, onClose }: DocumentViewerProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-[#07404b]">{document.title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="mb-4 text-sm text-gray-500">
          Date: {document.date}
        </div>

        <div className="prose max-w-none">
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h4 className="text-lg font-medium text-[#07404b] mb-2">Summary</h4>
            <p>{document.summary}</p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-[#07404b] mb-2">Full Content</h4>
            <p className="whitespace-pre-wrap">{document.content}</p>
          </div>

          {document.fileName && (
            <div className="mt-4 pt-4 border-t">
              <p className="text-sm text-gray-500">
                Source: {document.fileName}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}