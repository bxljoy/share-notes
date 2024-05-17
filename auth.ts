import NextAuth from "next-auth";
import "next-auth/jwt";

import Google from "next-auth/providers/google";
import github from "next-auth/providers/github";

import { connectDatabase } from "./utils/database";
import User from "@/models/user";

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
        const sessionUser = await User.findOne({ email: session.user.email });
        if (!sessionUser) {
          return session;
        }
        session.user.id = sessionUser._id.toString();
        console.log("session: ", session);
        return session;
      } catch (error) {
        console.log("Error fetching user from database: ", error);
        return session;
      }
    },
    async signIn({ profile }) {
      try {
        await connectDatabase();

        // Check if user exists in the database
        const userExists = await User.findOne({ email: profile?.email });

        // If user does not exist, create a new user
        if (!userExists) {
          await User.create({
            email: profile?.email,
            username: profile?.name,
            image: profile?.picture,
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
