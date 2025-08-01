import {
  createErrorResponse,
  createSuccessResponse,
  validateRequestBody,
} from '@/app/_lib/api-utils';
import { RegisterNewUserRequestDto } from '@/src/domains/dtos/User';
import { container } from '@/src/infrastructures/di/container';
import { TYPES } from '@/src/infrastructures/di/types';
import { UserController } from '@/src/interfaces/controllers/UserController';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const userController = container.get<UserController>(TYPES.UserController);
    const requestBody = await validateRequestBody(request);
    const typedRequestBody: RegisterNewUserRequestDto = {
      name: requestBody.name as string,
      username: requestBody.username as string,
      email: requestBody.email as string,
      password: requestBody.password as string,
      confirmPassword: requestBody.confirmPassword as string,
    };
    const result = await userController.register(typedRequestBody);

    return createSuccessResponse(result, 'User registered successfully', 201);
  } catch (error) {
    return createErrorResponse(error);
  }
}
