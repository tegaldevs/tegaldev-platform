import NextAuth from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '@/lib/prisma';
import CredentialsProvider from 'next-auth/providers/credentials';
import type { UserRole } from '@prisma/client';

export const dynamic = 'force-dynamic';

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
          // Simple authentication logic - you can implement your own user validation here
          // For now, this is a placeholder that should be replaced with actual user authentication
          const user = await prisma.user.findFirst({
            where: {
              OR: [
                { email: credentials.credential },
                { username: credentials.credential },
                { phone: credentials.credential },
              ],
            },
          });

          if (!user) return null;

          // Add password verification logic here
          // const isValidPassword = await bcrypt.compare(credentials.password, user.password);
          // if (!isValidPassword) return null;

          return {
            id: user.id,
            name: user.name,
            email: user.email,
            username: user.username || '',
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
        session.user.role = token.role as UserRole;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
