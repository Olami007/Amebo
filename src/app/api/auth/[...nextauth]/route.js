import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  // secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  // To display error on the page
  pages: {
    error: "/",
  },

  callbacks: {
    async jwt({ token }) {
      // token.userRole = "admin";
      console.log(token);
      return token;
    },
  },
});

export { handler as GET, handler as POST };
