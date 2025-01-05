export type UserRole = 'doctor' | 'patient' | 'caregiver';

export interface User {
  id: string;
  role: UserRole;
  name: string;
  email: string;
}