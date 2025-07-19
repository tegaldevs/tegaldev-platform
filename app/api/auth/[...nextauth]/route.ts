import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from '@/src/infrastructures/database/prisma';

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [],
});

export { handler as GET, handler as POST };
