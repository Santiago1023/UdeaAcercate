import { NextApiRequest, NextApiResponse } from 'next/types';
import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from "next-auth/providers/google";

import prisma from '../../../config/prisma';
import { PrismaAdapter } from '@auth/prisma-adapter';
import async from '../login';

export const authOptions: NextAuthOptions = {
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "google") {
        return profile?.email_verified && profile?.email?.endsWith("@udea.edu.co")
      }else{
        console.log("Pagina de error")
      }
      return true
    },
  },
  pages:{
    error: '/signInError'
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
};

const auth = async (req: NextApiRequest, res: NextApiResponse) =>
  await NextAuth(req, res, authOptions);

export default auth;