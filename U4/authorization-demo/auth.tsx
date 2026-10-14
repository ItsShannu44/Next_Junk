import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: {},
        password: {},
      },

      async authorize(credentials) {
        const username = credentials?.username;
        const password = credentials?.password;

        if (username === "admin" && password === "1234") {
          return {
            id: "1",
            name: "Admin",
            role: "admin",
          };
        }

        if (username === "student" && password === "1234") {
          return {
            id: "2",
            name: "Student",
            role: "student",
          };
        }

        return null;
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }

      return token;
    },

    async session({ session, token }) {
      session.user.role = token.role as string;
      return session;
    },
  },

  pages: {
    signIn: "/",
  },
});