import { Role } from './Role';

export interface User {
  id: string;
  role: Role;
  name: string;
  username: string;
  email: string;
  phone?: string;
  password?: string;
  image?: string;
  emailVerified?: Date;
  createdAt: Date;
  updatedAt: Date;
}
