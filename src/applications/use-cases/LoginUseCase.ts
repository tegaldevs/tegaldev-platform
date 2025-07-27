import { IUserRepository } from '@/src/domains/repositories/IUserRepository';
import { IValidationService } from '../services/IValidationService';
import { IHashService } from '../services/IHashService';
import { LoginRequestDto, LoginResponseDto } from '@/src/domains/dtos/Auth';
import { ErrorHandler } from '@/src/commons/utils';
import { InvalidCredentialsError } from '@/src/commons/exceptions/AuthenticationError';

export class LoginUseCase {
  constructor(
    private userRepository: IUserRepository,
    private validationService: IValidationService,
    private hashService: IHashService,
  ) {}

  async execute(loginRequest: LoginRequestDto): Promise<LoginResponseDto> {
    return ErrorHandler.handleAsync(async () => {
      await this.validationService.validateLogin(loginRequest);

      const { credential, password } = loginRequest;

      const user = await this.userRepository.findByCredential(credential);

      if (!user || !user.password) throw new InvalidCredentialsError();

      const isPasswordValid = await this.hashService.compare(
        password,
        user.password,
      );

      if (!isPasswordValid) throw new InvalidCredentialsError();

      const loginResponse: LoginResponseDto = {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        role: user.role,
      };

      return loginResponse;
    }, 'Login failed');
  }
}
