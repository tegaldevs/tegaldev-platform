import { User } from '@/src/domains/entities/User';
import { IUserRepository } from '@/src/domains/repositories/IUserRepository';
import { injectable } from 'inversify';
import prisma from '../database/prisma';
import { Role } from '@/src/domains/entities/Role';
import { RegisterNewUserRequestDto } from '@/src/domains/dtos/User';

@injectable()
export class UserRepositoryImp implements IUserRepository {
  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) return null;

    return {
      id: user.id,
      role: user.role as Role,
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone || undefined,
      password: user.password || undefined,
      image: user.image || undefined,
      emailVerified: user.emailVerified || undefined,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  async findByUsername(username: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) return null;

    return {
      id: user.id,
      role: user.role as Role,
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone || undefined,
      password: user.password || undefined,
      image: user.image || undefined,
      emailVerified: user.emailVerified || undefined,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  async findById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) return null;

    return {
      id: user.id,
      role: user.role as Role,
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone || undefined,
      password: user.password || undefined,
      image: user.image || undefined,
      emailVerified: user.emailVerified || undefined,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  async findByPhone(phone: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { phone },
    });

    if (!user) return null;

    return {
      id: user.id,
      role: user.role as Role,
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone || undefined,
      password: user.password || undefined,
      image: user.image || undefined,
      emailVerified: user.emailVerified || undefined,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  async create(
    registerNewUserRequest: RegisterNewUserRequestDto,
  ): Promise<User> {
    const user = await prisma.user.create({
      data: {
        name: registerNewUserRequest.name,
        username: registerNewUserRequest.username,
        email: registerNewUserRequest.email,
        password: registerNewUserRequest.password,
        role: registerNewUserRequest.role || Role.MEMBER,
      },
    });

    return {
      id: user.id,
      role: user.role as Role,
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone || undefined,
      password: user.password || undefined,
      image: user.image || undefined,
      emailVerified: user.emailVerified || undefined,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  async isExistsByEmail(email: string): Promise<boolean> {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true },
    });

    return user !== null;
  }

  async isExistsByUsername(username: string): Promise<boolean> {
    const user = await prisma.user.findUnique({
      where: { username },
      select: { id: true },
    });

    return user !== null;
  }

  async isExistsByPhone(phone: string): Promise<boolean> {
    const user = await prisma.user.findUnique({
      where: { phone },
      select: { id: true },
    });

    return user !== null;
  }
}
