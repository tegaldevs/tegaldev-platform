import { IHashService } from '@/src/applications/services/IHashService';
import { injectable } from 'inversify';
import * as bcrypt from 'bcryptjs';

@injectable()
export class HashServiceImp implements IHashService {
  private readonly defaultSaltRounds = 12;

  async hash(password: string): Promise<string> {
    try {
      return await bcrypt.hash(password, this.defaultSaltRounds);
    } catch (error) {
      throw new Error(
        `Failed to hash password: ${
          error instanceof Error ? error.message : 'Unknown error'
        }`,
      );
    }
  }

  async compare(password: string, hashedPassword: string): Promise<boolean> {
    try {
      return await bcrypt.compare(password, hashedPassword);
    } catch (error) {
      throw new Error(
        `Failed to compare passwords: ${
          error instanceof Error ? error.message : 'Unknown error'
        }`,
      );
    }
  }

  async generateSalt(rounds: number = this.defaultSaltRounds): Promise<string> {
    try {
      return await bcrypt.genSalt(rounds);
    } catch (error) {
      throw new Error(
        `Failed to generate salt: ${
          error instanceof Error ? error.message : 'Unknown error'
        }`,
      );
    }
  }

  async hashWithSalt(password: string, salt: string): Promise<string> {
    try {
      return await bcrypt.hash(password, salt);
    } catch (error) {
      throw new Error(
        `Failed to hash password with salt: ${
          error instanceof Error ? error.message : 'Unknown error'
        }`,
      );
    }
  }
}
