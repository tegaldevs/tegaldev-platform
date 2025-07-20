import { IValidationService } from '@/src/applications/services/IValidationService';
import { ValidationError } from '@/src/commons/exceptions/ClientError';
import { injectable } from 'inversify';
import { z } from 'zod';

const registerNewUserSchema = z
  .object({
    name: z
      .string()
      .min(1, 'Name is required')
      .min(2, 'Name must be at least 2 characters long')
      .max(100, 'Name must not exceed 100 characters'),

    username: z
      .string()
      .min(1, 'Username is required')
      .min(3, 'Username must be at least 3 characters long')
      .max(30, 'Username must not exceed 30 characters')
      .regex(
        /^[a-zA-Z0-9_]+$/,
        'Username can only contain letters, numbers, and underscores',
      ),

    email: z
      .string()
      .min(1, 'Email is required')
      .email('Please provide a valid email address')
      .max(255, 'Email must not exceed 255 characters'),

    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must be at least 8 characters long')
      .max(128, 'Password must not exceed 128 characters')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        'Password must contain at least one lowercase letter, one uppercase letter, and one number',
      ),

    confirmPassword: z.string().min(1, 'Password confirmation is required'),

    role: z.enum(['SUPERADMIN', 'ADMIN', 'EDITOR', 'MEMBER']).optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

@injectable()
export class ValidationServiceImp implements IValidationService {
  async validateRegisterNewUser(data: unknown): Promise<void> {
    try {
      registerNewUserSchema.parse(data);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationErrors = error.issues.map((err) => ({
          field: err.path.join('.'),
          message: err.message,
        }));

        throw new ValidationError(validationErrors);
      }

      throw error;
    }
  }
}
