import { useState, useCallback } from 'react';
import { User, UserRole } from '../types/auth';

// In a real app, this would be an API call
const mockLogin = async (email: string, password: string, role: UserRole): Promise<User> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Simple validation
  if (!email || !password) {
    throw new Error('Invalid credentials');
  }

  // Mock user data
  return {
    id: '123',
    email,
    role,
    name: 'Dr. John Smith'
  };
};

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = useCallback(async (email: string, password: string, role: UserRole) => {
    setLoading(true);
    setError(null);
    
    try {
      const user = await mockLogin(email, password, role);
      setUser(user);
      return user;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return {
    user,
    loading,
    error,
    login,
    logout
  };
}