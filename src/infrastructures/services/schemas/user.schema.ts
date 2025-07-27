import Joi from 'joi';

export const loginSchema = Joi.object({
  credential: Joi.string().min(1).max(255).required().messages({
    'string.empty': 'username, email, or phone is required',
    'string.max': 'credential must not exceed 255 characters',
    'any.required': 'username, email, or phone is required',
  }),

  password: Joi.string().min(1).max(128).required().messages({
    'string.empty': 'password is required',
    'string.max': 'password must not exceed 128 characters',
    'any.required': 'password is required',
  }),
});

export const registerNewUserSchema = Joi.object({
  name: Joi.string().min(2).max(100).required().messages({
    'string.empty': 'name is required',
    'string.min': 'name must be at least 2 characters long',
    'string.max': 'name must not exceed 100 characters',
    'any.required': 'name is required',
  }),

  username: Joi.string()
    .min(3)
    .max(30)
    .pattern(/^[a-zA-Z0-9_]+$/)
    .required()
    .messages({
      'string.empty': 'username is required',
      'string.min': 'username must be at least 3 characters long',
      'string.max': 'username must not exceed 30 characters',
      'string.pattern.base':
        'username can only contain letters, numbers, and underscores',
      'any.required': 'username is required',
    }),

  email: Joi.string().email().max(255).required().messages({
    'string.empty': 'email is required',
    'string.email': 'please provide a valid email address',
    'string.max': 'email must not exceed 255 characters',
    'any.required': 'email is required',
  }),

  password: Joi.string()
    .min(8)
    .max(128)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .required()
    .messages({
      'string.empty': 'password is required',
      'string.min': 'password must be at least 8 characters long',
      'string.max': 'password must not exceed 128 characters',
      'string.pattern.base':
        'password must contain at least one lowercase letter, one uppercase letter, and one number',
      'any.required': 'password is required',
    }),

  confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({
    'string.empty': 'confirmPassword is required',
    'any.only': 'passwords do not match',
    'any.required': 'confirmPassword is required',
  }),

  role: Joi.string()
    .valid('SUPERADMIN', 'ADMIN', 'EDITOR', 'MEMBER')
    .optional(),
});

export interface RegisterNewUserSchema {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  role?: 'SUPERADMIN' | 'ADMIN' | 'EDITOR' | 'MEMBER';
}
