export const TYPES = {
  // Repositories
  UserRepository: Symbol.for('UserRepository'),

  // Services
  HashService: Symbol.for('HashService'),
  ValidationService: Symbol.for('ValidationService'),

  // Use Cases
  RegisterNewUserUseCase: Symbol.for('RegisterNewUserUseCase'),
  LoginUseCase: Symbol.for('LoginUseCase'),

  // Application Services
  UserService: Symbol.for('UserService'),

  // Controllers
  UserController: Symbol.for('UserController'),
};
