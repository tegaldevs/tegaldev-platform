import { Role } from '../entities/Role';

export interface RegisterNewUserRequestDto {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  role?: Role;
}

export interface RegisterNewUserResponseDto {
  id: string;
  name: string;
  username: string;
  email: string;
  createdAt: Date;
  role?: Role;
}
