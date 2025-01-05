import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserRole } from '../../types/auth';
import { LoginForm } from '../auth/LoginForm';
import { NAV_LINKS } from '../../constants/navigation';
import { NavLink } from './NavLink';
import { Stethoscope, UserCircle2, Heart } from 'lucide-react';

const roleIcons = {
  doctor: Stethoscope,
  patient: UserCircle2,
  caregiver: Heart
};

export function Navigation() {
  const [showLogin, setShowLogin] = useState(false);
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowLogin(false);
        setSelectedRole(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogin = (email: string, password: string) => {
    navigate('/patient-search');
    setShowLogin(false);
    setSelectedRole(null);
  };

  return (
    <nav className="flex items-center space-x-8">
      <div className="hidden md:flex space-x-8">
        {NAV_LINKS.map(({ href, label }) => (
          <NavLink key={href} href={href}>
            {label}
          </NavLink>
        ))}
      </div>

      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setShowLogin(!showLogin)}
          className="bg-[#bcdc49] text-[#07404b] px-6 py-2 rounded-full hover:bg-[#c6e5de] transition-colors"
        >
          Login
        </button>

        {showLogin && (
          <div className="absolute right-0 top-12 w-[400px] z-50">
            {selectedRole ? (
              <LoginForm 
                role={selectedRole} 
                onLogin={handleLogin}
                onBack={() => setSelectedRole(null)}
              />
            ) : (
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-[#07404b] mb-4">Select Your Role</h3>
                <div className="space-y-2">
                  {(Object.keys(roleIcons) as UserRole[]).map((role) => {
                    const Icon = roleIcons[role];
                    return (
                      <button
                        key={role}
                        onClick={() => setSelectedRole(role)}
                        className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-3 text-gray-700 hover:text-[#07404b]"
                      >
                        <Icon className="w-5 h-5" />
                        <span className="capitalize">{role}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}