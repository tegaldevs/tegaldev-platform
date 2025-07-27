import NextAuth from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '@/src/infrastructures/database/prisma';
import CredentialsProvider from 'next-auth/providers/credentials';
import { container } from '@/src/infrastructures/di/container';
import { UserController } from '@/src/interfaces/controllers/UserController';
import { TYPES } from '@/src/infrastructures/di/types';
import { LoginRequestDto } from '@/src/domains/dtos/Auth';

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        credential: {
          label: 'Username, Email, or Phone',
          type: 'text',
          placeholder: 'Enter your username, email, or phone number',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials) {
        if (!credentials?.credential || !credentials?.password) return null;

        try {
          const userController = container.get<UserController>(
            TYPES.UserController,
          );
          const loginRequest: LoginRequestDto = {
            credential: credentials.credential,
            password: credentials.password,
          };

          const user = await userController.login(loginRequest);

          return {
            id: user.id,
            name: user.name,
            email: user.email,
            username: user.username,
            role: user.role,
          };
        } catch (error) {
          console.error('Authentication error:', error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.username = token.username as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
