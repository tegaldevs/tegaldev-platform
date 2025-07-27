import {
  RegisterNewUserRequestDto,
  RegisterNewUserResponseDto,
} from '@/src/domains/dtos/User';
import { LoginUseCase } from '../use-cases/LoginUseCase';
import { RegisterNewUserUseCase } from '../use-cases/RegisterNewUserUseCase';
import { LoginRequestDto, LoginResponseDto } from '@/src/domains/dtos/Auth';

export class UserService {
  constructor(
    private registerNewUserUseCase: RegisterNewUserUseCase,
    private loginUseCase: LoginUseCase,
  ) {}

  async registerUser(
    registerNewUserRequest: RegisterNewUserRequestDto,
  ): Promise<RegisterNewUserResponseDto> {
    return this.registerNewUserUseCase.execute(registerNewUserRequest);
  }

  async login(loginRequest: LoginRequestDto): Promise<LoginResponseDto> {
    return this.loginUseCase.execute(loginRequest);
  }
}
