import authConfig from "@/config/auth.config"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "./prisma"
import NextAuth from "next-auth"
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  ...authConfig,
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "google") {
        return Boolean(profile?.email_verified)
      }
      return true // Do different verification for other providers that don't have `email_verified`
    },
  },
})