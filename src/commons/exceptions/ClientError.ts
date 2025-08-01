import { BaseException } from './BaseException';

export class ClientError extends BaseException {
  constructor(message: string, statusCode: number = 400) {
    super(message, statusCode, true);
  }
}

export class BadRequestError extends ClientError {
  constructor(message: string = 'Bad request') {
    super(message, 400);
  }
}

export class ValidationError extends ClientError {
  public readonly errors: Array<{ field: string; message: string }>;

  constructor(
    errors: Array<{ field: string; message: string }>,
    message: string = 'Validation failed',
  ) {
    super(message, 400);
    this.errors = errors;
  }
}

export class NotFoundError extends ClientError {
  constructor(resource: string = 'Resource', message?: string) {
    super(message || `${resource} not found`, 404);
  }
}

export class ConflictError extends ClientError {
  constructor(message: string = 'Resource already exists') {
    super(message, 409);
  }
}

export class UnprocessableEntityError extends ClientError {
  constructor(message: string = 'Unprocessable entity') {
    super(message, 422);
  }
}
