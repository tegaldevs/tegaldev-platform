import { IUserRepository } from '@/src/domains/repositories/IUserRepository';
import { IValidationService } from '../services/IValidationService';
import { IHashService } from '../services/IHashService';
import {
  RegisterNewUserRequestDto,
  RegisterNewUserResponseDto,
} from '@/src/domains/dtos/User';
import { ConflictError } from '@/src/commons/exceptions/ClientError';

export class RegisterNewUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private validationService: IValidationService,
    private hashService: IHashService,
  ) {}

  async execute(
    registerNewUserRequest: RegisterNewUserRequestDto,
  ): Promise<RegisterNewUserResponseDto> {
    await this.validationService.validateRegisterNewUser(
      registerNewUserRequest,
    );

    const { username, email, password } = registerNewUserRequest;

    const existingUsername = await this.userRepository.isExistsByUsername(
      username,
    );

    if (existingUsername)
      throw new ConflictError('User with this username already exists');

    const existingEmail = await this.userRepository.isExistsByEmail(email);

    if (existingEmail)
      throw new ConflictError('User with this email already exists');

    const hashedPassword = await this.hashService.hash(password);

    const createdUser = await this.userRepository.create({
      ...registerNewUserRequest,
      password: hashedPassword,
    });

    const registeredNewUser: RegisterNewUserResponseDto = {
      id: createdUser.id,
      name: createdUser.name,
      username: createdUser.username,
      email: createdUser.email,
      createdAt: createdUser.createdAt,
    };

    return registeredNewUser;
  }
}
