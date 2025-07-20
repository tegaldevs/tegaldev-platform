import {
  RegisterNewUserRequestDto,
  RegisterNewUserResponseDto,
} from '@/src/domains/dtos/User';
import { RegisterNewUserUseCase } from '../use-cases/RegisterNewUserUseCase';

export class UserService {
  constructor(private registerNewUserUseCase: RegisterNewUserUseCase) {}

  async registerUser(
    registerNewUserRequest: RegisterNewUserRequestDto,
  ): Promise<RegisterNewUserResponseDto> {
    return this.registerNewUserUseCase.execute(registerNewUserRequest);
  }
}
