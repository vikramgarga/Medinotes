import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserRole } from '../types/auth';
import { RoleSelection } from '../components/auth/RoleSelection';
import { LoginForm } from '../components/auth/LoginForm';
import { About } from '../components/sections/About';
import { Benefits } from '../components/sections/Benefits';
import { Users } from '../components/sections/Users';
import { Features } from '../components/sections/Features';
import { Testimonials } from '../components/sections/Testimonials';
import { Contact } from '../components/sections/Contact';
import { Header } from '../components/sections/Header';
import { Footer } from '../components/sections/Footer';

export function HomePage() {
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const navigate = useNavigate();

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
  };

  const handleLogin = (email: string, password: string) => {
    console.log('Logging in with:', { email, password, role: selectedRole });
    navigate('/patient-search');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {selectedRole ? (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <LoginForm role={selectedRole} onLogin={handleLogin} onBack={() => setSelectedRole(null)} />
          </div>
        </section>
      ) : (
        <>
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-[#07404b] text-center mb-12">
                Select Your Role
              </h2>
              <RoleSelection onRoleSelect={handleRoleSelect} />
            </div>
          </section>
          
          <About />
          <Users />
          <Features />
          <Benefits />
          <Testimonials />
          <Contact />
        </>
      )}

      <Footer />
    </div>
  );
}