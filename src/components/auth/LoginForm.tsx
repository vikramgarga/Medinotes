import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserRole } from '../../types/auth';
import { useAuthContext } from '../../context/AuthContext';
import { Stethoscope, UserCircle2, Heart, ArrowLeft, Loader } from 'lucide-react';
import { PatientRegistration, PatientRegistrationData } from './PatientRegistration';
import { DocumentBasedRegistration } from './DocumentBasedRegistration';

interface LoginFormProps {
  role: UserRole;
  onBack?: () => void;
}

const roleIcons = {
  doctor: Stethoscope,
  patient: UserCircle2,
  caregiver: Heart
} as const;

export function LoginForm({ role, onBack }: LoginFormProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showRegistration, setShowRegistration] = useState(false);
  const [showDocUpload, setShowDocUpload] = useState(false);
  const { login, loading, error } = useAuthContext();
  const navigate = useNavigate();
  const Icon = roleIcons[role];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password, role);
      navigate('/dashboard');
    } catch (err) {
      // Error is handled by the auth hook
    }
  };

  const handleRegistration = (data: PatientRegistrationData) => {
    // In a real app, this would create a new patient account
    console.log('Registration data:', data);
    login(data.email, data.password, 'patient')
      .then(() => navigate('/dashboard'));
  };

  const handleDocumentBasedRegistration = (data: any) => {
    // In a real app, this would create a profile from documents
    console.log('Document-based registration data:', data);
    setShowDocUpload(false);
    setShowRegistration(true);
  };

  if (showDocUpload && role === 'patient') {
    return (
      <DocumentBasedRegistration
        onComplete={handleDocumentBasedRegistration}
        onBack={() => setShowDocUpload(false)}
      />
    );
  }

  if (showRegistration && role === 'patient') {
    return (
      <PatientRegistration
        onRegister={handleRegistration}
        onBack={() => setShowRegistration(false)}
      />
    );
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      {onBack && (
        <button
          onClick={onBack}
          className="flex items-center text-sm text-gray-600 hover:text-[#07404b] mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to roles
        </button>
      )}

      <div className="flex flex-col items-center mb-6">
        <Icon className="w-16 h-16 text-[#07404b] mb-4" />
        <h2 className="text-2xl font-bold text-[#07404b] text-center">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h2>
        <p className="text-gray-600">
          {role.charAt(0).toUpperCase() + role.slice(1)} Portal
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#07404b] focus:border-transparent"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#07404b] focus:border-transparent"
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#07404b] text-white py-3 px-4 rounded-lg hover:bg-[#07404b]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {loading ? (
            <>
              <Loader className="w-5 h-5 animate-spin mr-2" />
              {isLogin ? 'Logging in...' : 'Creating account...'}
            </>
          ) : (
            isLogin ? 'Login' : 'Create Account'
          )}
        </button>

        {role === 'patient' && (
          <div className="text-center space-y-2 pt-4">
            <button
              type="button"
              onClick={() => setShowRegistration(true)}
              className="text-sm text-[#07404b] hover:text-[#bcdc49] transition-colors block w-full"
            >
              New patient? Register manually
            </button>
            <button
              type="button"
              onClick={() => setShowDocUpload(true)}
              className="text-sm text-[#07404b] hover:text-[#bcdc49] transition-colors block w-full"
            >
              Create profile from medical documents
            </button>
          </div>
        )}
      </form>
    </div>
  );
}