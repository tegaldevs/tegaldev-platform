import { IUserRepository } from '@/src/domains/repositories/IUserRepository';
import { Container } from 'inversify';
import { TYPES } from './types';
import { UserRepositoryImp } from '../repositories/UserRepositoryImp';
import { IHashService } from '@/src/applications/services/IHashService';
import { HashServiceImp } from '../services/HashServiceImp';
import { IValidationService } from '@/src/applications/services/IValidationService';
import { ValidationServiceImp } from '../services/ValidationServiceImp';
import { RegisterNewUserUseCase } from '@/src/applications/use-cases/RegisterNewUserUseCase';
import { LoginUseCase } from '@/src/applications/use-cases/LoginUseCase';
import { UserService } from '@/src/applications/services/UserService';
import { UserController } from '@/src/interfaces/controllers/UserController';

const container = new Container();

// Bind repositories
container.bind<IUserRepository>(TYPES.UserRepository).to(UserRepositoryImp);

// Bind services
container.bind<IHashService>(TYPES.HashService).to(HashServiceImp);
container
  .bind<IValidationService>(TYPES.ValidationService)
  .to(ValidationServiceImp);

// Bind use cases
container
  .bind<RegisterNewUserUseCase>(TYPES.RegisterNewUserUseCase)
  .toDynamicValue(() => {
    const userRepository = container.get<IUserRepository>(TYPES.UserRepository);
    const hashService = container.get<IHashService>(TYPES.HashService);
    const validationService = container.get<IValidationService>(
      TYPES.ValidationService,
    );

    return new RegisterNewUserUseCase(
      userRepository,
      validationService,
      hashService,
    );
  });

container.bind<LoginUseCase>(TYPES.LoginUseCase).toDynamicValue(() => {
  const userRepository = container.get<IUserRepository>(TYPES.UserRepository);
  const hashService = container.get<IHashService>(TYPES.HashService);
  const validationService = container.get<IValidationService>(
    TYPES.ValidationService,
  );

  return new LoginUseCase(userRepository, validationService, hashService);
});

// Bind application services
container.bind<UserService>(TYPES.UserService).toDynamicValue(() => {
  const registerNewUserUseCase = container.get<RegisterNewUserUseCase>(
    TYPES.RegisterNewUserUseCase,
  );
  const loginUseCase = container.get<LoginUseCase>(TYPES.LoginUseCase);

  return new UserService(registerNewUserUseCase, loginUseCase);
});

// Bind controllers
container.bind<UserController>(TYPES.UserController).to(UserController);

export { container };
