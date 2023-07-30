import connect from "@/utils/db";
import NextAuth from "next-auth";
import User from "@/models/User";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextResponse } from "next/server";

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
          const user =
            (await User.findOne({
              email: credentials.emailUsername,
            })) ||
            (await User.findOne({
              username: credentials.emailUsername,
            }));

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
    // newUser: "/auth/new-user",
    // verifyRequest: "/auth/verify-request", // (used for check email message)
  },

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === "google") {
        await connect();
        const userExist = await User.findOne({ email: profile.email });
        if (!userExist) {
          const newGoogleUser = new User({
            username: `${profile.email.slice(0, 4)}${Math.floor(
              1000 + Math.random() * 9000
            )}`,
            firstName: profile.family_name,
            lastName: profile.given_name,
            email: profile.email,
            password: "password",
          });

          try {
            await newGoogleUser.save();
            return new NextResponse("User has been created successfully", {
              status: 201,
            });
          } catch (error) {
            return new NextResponse(error.message, { status: 500 });
          }
        }
      }

      return true;
    },
    async jwt({ token }) {
      // token.userRole = "admin";
      // console.log(token);
      return token;
    },
    async session({ session, user, token, profile }) {
      // console.log(token);
      const oneUser = await User.findOne({ email: token.email });
      // console.log(oneUser);
      // console.log(session, "session", profile, "profile", token, "token");
      // return session;
      // return { ...session };
      return { ...session, ...oneUser };
    },
  },
});

export { handler as GET, handler as POST };
