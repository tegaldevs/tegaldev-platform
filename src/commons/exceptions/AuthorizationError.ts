import { BaseException } from './BaseException';

export class AuthorizationError extends BaseException {
  constructor(message: string = 'Access denied') {
    super(message, 403, true);
  }
}

export class InsufficientPermissionsError extends AuthorizationError {
  constructor(
    message: string = 'Insufficient permissions to perform this action',
  ) {
    super(message);
  }
}

export class ForbiddenResourceError extends AuthorizationError {
  constructor(message: string = 'Access to this resource is forbidden') {
    super(message);
  }
}

export class RoleRequiredError extends AuthorizationError {
  constructor(requiredRole: string, message?: string) {
    super(
      message || `${requiredRole} role is required to access this resource`,
    );
  }
}
