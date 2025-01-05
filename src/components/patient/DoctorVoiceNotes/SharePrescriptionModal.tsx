import { useState } from 'react';
import { X, Send, Phone, Mail } from 'lucide-react';

interface SharePrescriptionModalProps {
  prescription: string;
  onClose: () => void;
}

export function SharePrescriptionModal({ prescription, onClose }: SharePrescriptionModalProps) {
  const [method, setMethod] = useState<'whatsapp' | 'email'>('whatsapp');
  const [contact, setContact] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contact) {
      setError('Please enter contact information');
      return;
    }

    setSending(true);
    setError('');

    try {
      // In a real app, this would make an API call to send the prescription
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      alert(`Prescription sent successfully to ${contact} via ${method}`);
      onClose();
    } catch (err) {
      setError('Failed to send prescription. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-[#07404b]">Share Prescription</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setMethod('whatsapp')}
              className={`flex-1 p-3 rounded-lg border flex items-center justify-center gap-2
                ${method === 'whatsapp' 
                  ? 'border-[#07404b] text-[#07404b] bg-[#c6e5de]' 
                  : 'border-gray-300 text-gray-600'}`}
            >
              <Phone className="w-5 h-5" />
              WhatsApp
            </button>
            <button
              type="button"
              onClick={() => setMethod('email')}
              className={`flex-1 p-3 rounded-lg border flex items-center justify-center gap-2
                ${method === 'email' 
                  ? 'border-[#07404b] text-[#07404b] bg-[#c6e5de]' 
                  : 'border-gray-300 text-gray-600'}`}
            >
              <Mail className="w-5 h-5" />
              Email
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {method === 'whatsapp' ? 'WhatsApp Number' : 'Email Address'}
            </label>
            <input
              type={method === 'whatsapp' ? 'tel' : 'email'}
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder={method === 'whatsapp' ? 'Enter phone number' : 'Enter email address'}
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#07404b]"
            />
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-[#07404b] mb-2">Prescription</h4>
            <p className="text-gray-700 whitespace-pre-wrap">{prescription}</p>
          </div>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={sending}
              className="flex items-center gap-2 px-4 py-2 bg-[#07404b] text-white rounded-lg hover:bg-[#07404b]/90 disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              {sending ? 'Sending...' : 'Send Prescription'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}