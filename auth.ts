import NextAuth from "next-auth";
import "next-auth/jwt";

import Google from "next-auth/providers/google";
import github from "next-auth/providers/github";

import prisma from "@/utils/prisma-client";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google, github],
  callbacks: {
    jwt({ token, trigger, session, account }) {
      if (trigger === "update") token.name = session.user.name;
      return token;
    },
    async session({ session, token }) {
      if (token?.accessToken) {
        session.accessToken = token.accessToken;
      }

      try {
        const sessionUser = await prisma.users.findUnique({
          where: {
            email: session.user.email,
          },
          cacheStrategy: { swr: 60, ttl: 60 },
        });
        if (!sessionUser || !sessionUser.id) {
          return session;
        }
        session.user.id = sessionUser.id.toString();
        // console.log("session: ", session);
        return session;
      } catch (error) {
        console.log("Error fetching user from database: ", error);
        return session;
      }
    },
    async signIn({ profile }) {
      if (!profile?.email || !profile?.name) {
        return false;
      }
      try {
        // Check if user exists in the database
        const userExists = await prisma.users.findUnique({
          where: {
            email: profile?.email,
          },
          cacheStrategy: { swr: 60, ttl: 60 },
        });

        // If user does not exist, create a new user
        if (!userExists) {
          await prisma.users.create({
            data: {
              email: profile?.email,
              username: profile?.name,
              image: profile?.picture,
            },
          });
        }

        return true;
      } catch (error) {
        console.log("Error connecting to database: ", error);
        return false;
      }
    },
  },
});
declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
  }
}
