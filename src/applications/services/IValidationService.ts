export interface IValidationService {
  validateRegisterNewUser(data: unknown): Promise<void>;
  validateLogin(data: unknown): Promise<void>;
}
