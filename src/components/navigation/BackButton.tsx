import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <button 
      onClick={handleBack}
      className="inline-flex items-center gap-2 px-4 py-2 text-[#07404b] hover:text-[#bcdc49] transition-colors"
    >
      <ArrowLeft className="w-5 h-5" />
      Back to Home
    </button>
  );
}