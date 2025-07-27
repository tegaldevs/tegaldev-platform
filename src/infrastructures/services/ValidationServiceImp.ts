import { IValidationService } from '@/src/applications/services/IValidationService';
import { ErrorHandler } from '@/src/commons/utils';
import { injectable } from 'inversify';
import { loginSchema, registerNewUserSchema } from './schemas';
import Joi from 'joi';
import { ValidationError } from '@/src/commons/exceptions/ClientError';

@injectable()
export class ValidationServiceImp implements IValidationService {
  async validateRegisterNewUser(data: unknown): Promise<void> {
    return ErrorHandler.handleAsyncWithTransform(
      async () => {
        const { error } = registerNewUserSchema.validate(data, {
          abortEarly: false,
        });
        if (error) throw error;
      },
      (error) => {
        if (
          error &&
          typeof error === 'object' &&
          'isJoi' in error &&
          error.isJoi
        ) {
          const joiError = error as Joi.ValidationError;
          const firstError = joiError.details[0];
          const message = firstError.message;
          return new ValidationError([], message);
        }
        throw error;
      },
    );
  }

  async validateLogin(data: unknown): Promise<void> {
    return ErrorHandler.handleAsyncWithTransform(
      async () => {
        const { error } = loginSchema.validate(data, { abortEarly: false });
        if (error) throw error;
      },
      (error) => {
        if (
          error &&
          typeof error === 'object' &&
          'isJoi' in error &&
          error.isJoi
        ) {
          const joiError = error as Joi.ValidationError;
          const firstError = joiError.details[0];
          const message = firstError.message;
          return new ValidationError([], message);
        }
        throw error;
      },
    );
  }
}
