import { RegisterNewUserRequestDto } from '../dtos/User';
import { User } from '../entities/User';

export interface IUserRepository {
  findByEmail(email: string): Promise<User | null>;
  findByUsername(username: string): Promise<User | null>;
  findByPhone(phone: string): Promise<User | null>;
  findByCredential(credential: string): Promise<User | null>;
  findById(id: string): Promise<User | null>;
  create(registerNewUserRequest: RegisterNewUserRequestDto): Promise<User>;
  isExistsByEmail(email: string): Promise<boolean>;
  isExistsByUsername(username: string): Promise<boolean>;
  isExistsByPhone(phone: string): Promise<boolean>;
}
