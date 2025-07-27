import { UserService } from '@/src/applications/services/UserService';
import { LoginRequestDto, LoginResponseDto } from '@/src/domains/dtos/Auth';
import {
  RegisterNewUserRequestDto,
  RegisterNewUserResponseDto,
} from '@/src/domains/dtos/User';
import { container } from '@/src/infrastructures/di/container';
import { TYPES } from '@/src/infrastructures/di/types';

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = container.get<UserService>(TYPES.UserService);
  }

  async register(
    registerNewUserRequest: RegisterNewUserRequestDto,
  ): Promise<RegisterNewUserResponseDto> {
    return this.userService.registerUser(registerNewUserRequest);
  }

  async login(loginRequest: LoginRequestDto): Promise<LoginResponseDto> {
    return this.userService.login(loginRequest);
  }
}
