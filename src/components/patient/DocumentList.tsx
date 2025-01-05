import { DocumentType, MedicalDocument } from '../../types/medical';
import { TYPE_ICONS } from '../../constants/documentIcons';
import { DocumentCard } from './DocumentCard';

interface DocumentListProps {
  documents: MedicalDocument[];
  type: DocumentType;
  title: string;
}

export function DocumentList({ documents, type, title }: DocumentListProps) {
  const typeDocuments = documents.filter(doc => doc.type === type);
  
  if (typeDocuments.length === 0) return null;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-[#07404b] flex items-center gap-2">
          {TYPE_ICONS[type]}
          {title}
        </h3>
        <span className="px-3 py-1 bg-[#c6e5de] text-[#07404b] rounded-full text-sm font-medium">
          {typeDocuments.length} records
        </span>
      </div>
      <div className="space-y-4">
        {typeDocuments.map(doc => (
          <DocumentCard key={doc.id} document={doc} />
        ))}
      </div>
    </div>
  );
}