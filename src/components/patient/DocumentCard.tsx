import { useState } from 'react';
import { MedicalDocument } from '../../types/medical';
import { DocumentViewer } from './DocumentViewer/DocumentViewer';

interface DocumentCardProps {
  document: MedicalDocument;
}

export function DocumentCard({ document }: DocumentCardProps) {
  const [showViewer, setShowViewer] = useState(false);

  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-medium text-[#07404b]">{document.title}</h4>
          <span className="text-sm text-gray-500">{document.date}</span>
        </div>
        <p className="text-sm text-gray-600 mb-2">{document.summary}</p>
        <button 
          onClick={() => setShowViewer(true)}
          className="text-sm text-[#07404b] hover:text-[#bcdc49] transition-colors"
        >
          View Document
        </button>
      </div>

      {showViewer && (
        <DocumentViewer 
          document={document} 
          onClose={() => setShowViewer(false)} 
        />
      )}
    </>
  );
}