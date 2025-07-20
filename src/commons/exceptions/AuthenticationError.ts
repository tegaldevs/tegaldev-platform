import { BaseException } from './BaseException';

export class AuthenticationError extends BaseException {
  constructor(message: string = 'Authentication failed') {
    super(message, 401, true);
  }
}

export class InvalidCredentialsError extends AuthenticationError {
  constructor(message: string = 'Invalid email or password') {
    super(message);
  }
}

export class TokenExpiredError extends AuthenticationError {
  constructor(message: string = 'Authentication token has expired') {
    super(message);
  }
}

export class InvalidTokenError extends AuthenticationError {
  constructor(message: string = 'Invalid authentication token') {
    super(message);
  }
}
