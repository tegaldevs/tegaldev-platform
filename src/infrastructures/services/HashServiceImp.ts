import { IHashService } from '@/src/applications/services/IHashService';
import { ErrorHandler } from '@/src/commons/utils';
import { injectable } from 'inversify';
import * as bcrypt from 'bcryptjs';

@injectable()
export class HashServiceImp implements IHashService {
  private readonly defaultSaltRounds = 12;

  async hash(password: string): Promise<string> {
    return ErrorHandler.handleAsync(
      () => bcrypt.hash(password, this.defaultSaltRounds),
      'Failed to hash password',
    );
  }

  async compare(password: string, hashedPassword: string): Promise<boolean> {
    return ErrorHandler.handleAsync(
      () => bcrypt.compare(password, hashedPassword),
      'Failed to compare passwords',
    );
  }

  async generateSalt(rounds: number = this.defaultSaltRounds): Promise<string> {
    return ErrorHandler.handleAsync(
      () => bcrypt.genSalt(rounds),
      'Failed to generate salt',
    );
  }

  async hashWithSalt(password: string, salt: string): Promise<string> {
    return ErrorHandler.handleAsync(
      () => bcrypt.hash(password, salt),
      'Failed to hash password with salt',
    );
  }
}
