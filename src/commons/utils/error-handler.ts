import { BaseException } from '../exceptions/BaseException';
import { InternalServerError } from '../exceptions/InternalServerError';

export class ErrorHandler {
  static async handleAsync<T>(
    operation: () => Promise<T>,
    errorMessage: string,
    ErrorClass: new (message: string) => BaseException = InternalServerError,
  ): Promise<T> {
    try {
      return await operation();
    } catch (error) {
      const message = `${errorMessage}: ${
        error instanceof Error ? error.message : 'Unknown error'
      }`;
      throw new ErrorClass(message);
    }
  }

  static handle<T>(
    operation: () => T,
    errorMessage: string,
    ErrorClass: new (message: string) => BaseException = InternalServerError,
  ): T {
    try {
      return operation();
    } catch (error) {
      const message = `${errorMessage}: ${
        error instanceof Error ? error.message : 'Unknown error'
      }`;
      throw new ErrorClass(message);
    }
  }

  static async handleAsyncWithTransform<T>(
    operation: () => Promise<T>,
    errorTransformer: (error: unknown) => BaseException,
  ): Promise<T> {
    try {
      return await operation();
    } catch (error) {
      throw errorTransformer(error);
    }
  }

  static handleWithTransform<T>(
    operation: () => T,
    errorTransformer: (error: unknown) => BaseException,
  ): T {
    try {
      return operation();
    } catch (error) {
      throw errorTransformer(error);
    }
  }
}
