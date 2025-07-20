export interface IValidationService {
  validateRegisterNewUser(data: unknown): Promise<void>;
}
