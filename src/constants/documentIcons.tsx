import { FileText, Microscope, ImageIcon, Stethoscope, File } from 'lucide-react';
import { DocumentType } from '../types/medical';

export const TYPE_ICONS: Record<DocumentType, React.ReactNode> = {
  lab: <Microscope className="w-5 h-5" />,
  scan: <ImageIcon className="w-5 h-5" />,
  prescription: <FileText className="w-5 h-5" />,
  diagnosis: <Stethoscope className="w-5 h-5" />,
  other: <File className="w-5 h-5" />
};