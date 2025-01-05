import { Upload, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';

interface ImageUploadProps {
  currentPhotoUrl: string;
  onImageUpload: (file: File) => void;
}

export function ImageUpload({ currentPhotoUrl, onImageUpload }: ImageUploadProps) {
  const [previewUrl, setPreviewUrl] = useState(currentPhotoUrl);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Create preview URL
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    onImageUpload(file);
  };

  return (
    <div className="relative group">
      <img
        src={previewUrl}
        alt="Patient photo"
        className="w-32 h-32 rounded-full object-cover"
      />
      <label
        htmlFor="photo-upload"
        className="absolute inset-0 flex items-center justify-center rounded-full 
                 bg-black/50 opacity-0 group-hover:opacity-100 cursor-pointer
                 transition-opacity"
      >
        <div className="text-white flex flex-col items-center">
          <ImageIcon className="w-6 h-6 mb-1" />
          <span className="text-xs">Update Photo</span>
        </div>
        <input
          id="photo-upload"
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
}