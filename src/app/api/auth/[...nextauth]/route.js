import connect from "@/utils/db";
import NextAuth from "next-auth";
import User from "@/models/User";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",

      async authorize(credentials) {
        await connect();

        try {
          const user = await User.findOne({
            email: credentials.email || credentials.username,
          });

          // if (user) {
          //   // check password
          //   const isPasswordCorrect = bcrypt.compare(
          //     credentials.password,
          //     user.password
          //   );

          //   if (isPasswordCorrect) {
          //     return user;
          //   } else {
          //     throw new Error("Wrong Credentials");
          //   }
          // } else {
          //   throw new Error("User not Found");
          // }

          if (user) {
            // Check password
            const isPasswordCorrect = credentials.password === user.password;
            if (isPasswordCorrect) {
              return user;
            }
          } else {
            throw new Error("User not Found");
          }
        } catch (error) {
          throw new Error("Invalid login details");
        }
      },
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
