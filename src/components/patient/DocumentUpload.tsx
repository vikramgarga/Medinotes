import { useState } from 'react';
import { Upload } from 'lucide-react';
import { useDocumentUpload } from '../../hooks/useDocumentUpload';
import { useParams } from 'react-router-dom';
import { DocumentUploadModal } from './DocumentUpload/DocumentUploadModal';
import { DocumentType } from '../../types/medical';

export function DocumentUpload() {
  const { id } = useParams<{ id: string }>();
  const { uploadDocument, uploading, error } = useDocumentUpload(id || '');
  const [showModal, setShowModal] = useState(false);

  const handleUpload = async (file: File, type: DocumentType, title: string) => {
    if (!id) return;
    try {
      await uploadDocument(file, type, title);
      setShowModal(false);
    } catch (err) {
      console.error('Upload failed:', err);
    }
  };

  return (
    <div>
      <button 
        onClick={() => setShowModal(true)}
        className="flex items-center gap-2 px-4 py-2 bg-[#07404b] text-white rounded-lg hover:bg-[#07404b]/90"
      >
        <Upload className="w-5 h-5" />
        Upload Document
      </button>

      {error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}

      {showModal && (
        <DocumentUploadModal
          onClose={() => setShowModal(false)}
          onUpload={handleUpload}
          uploading={uploading}
        />
      )}
    </div>
  );
}