import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './context/AuthContext';
import { HomePage } from './pages/HomePage';
import { DoctorDashboard } from './pages/DoctorDashboard';
import { PatientDashboard } from './pages/PatientDashboard';
import { PatientHistory } from './pages/PatientHistory';
import { PatientSearch } from './pages/PatientSearch';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuthContext();
  return user ? <>{children}</> : <Navigate to="/" />;
}

export default function App() {
  const { user } = useAuthContext();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      
      <Route path="/dashboard" element={
        <PrivateRoute>
          {user?.role === 'doctor' ? <DoctorDashboard /> : <PatientDashboard />}
        </PrivateRoute>
      } />
      
      <Route path="/patient/:id" element={
        <PrivateRoute>
          <PatientHistory />
        </PrivateRoute>
      } />

      <Route path="/patient-search" element={
        <PrivateRoute>
          <PatientSearch />
        </PrivateRoute>
      } />

      {/* Catch all route - redirect to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}