import authConfig from "@/config/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter"
import { DefaultSession } from "next-auth";
import NextAuth from "next-auth";
import { PrismaClient } from "../generated/prisma";
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"]
  }
}
const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth }= NextAuth({
  adapter: PrismaAdapter(prisma),
  ...authConfig,
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, user }) {
      if (session?.user) {
        session.user.id = user.id;
      }
      return session;
    },
    async signIn({ user, account }) {
      if (account?.provider === "google" && user.email) {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email },
        });

        if (!existingUser) {
          await prisma.user.create({
            data: {
              email: user.email,
              name: user.name,
              image: user.image,
              emailVerified: new Date(),
            },
          });
        }
      }
      return true;
    },
  },
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt" as const,
  },
});
