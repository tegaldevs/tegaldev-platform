import { BaseException } from './BaseException';

export class InternalServerError extends BaseException {
  constructor(
    message: string = 'Internal server error',
    statusCode: number = 500,
  ) {
    super(message, statusCode, true);
  }
}

export class DatabaseError extends InternalServerError {
  constructor(message: string = 'Database operation failed') {
    super(message, 500);
  }
}

export class ExternalServiceError extends InternalServerError {
  constructor(service: string, message?: string) {
    super(message || `External service ${service} is unavailable`, 502);
  }
}

export class ConfigurationError extends InternalServerError {
  constructor(message: string = 'Server configuration error') {
    super(message, 500);
  }
}

export class ServiceUnavailableError extends InternalServerError {
  constructor(message: string = 'Service temporarily unavailable') {
    super(message, 503);
  }
}

export class TimeoutError extends InternalServerError {
  constructor(message: string = 'Request timeout') {
    super(message, 504);
  }
}
