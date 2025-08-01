export interface IHashService {
  hash(password: string): Promise<string>;
  compare(password: string, hashedPassword: string): Promise<boolean>;
  generateSalt(rounds?: number): Promise<string>;
  hashWithSalt(password: string, salt: string): Promise<string>;
}
