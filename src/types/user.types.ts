// src/types/user.types.ts
export type UserRole = 'admin' | 'student' | 'faculty';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}