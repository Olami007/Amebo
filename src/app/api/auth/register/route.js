import connect from "@/utils/db";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (req) => {
  const { username, firstName, lastName, email, password } = await req.json();
  await connect();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    username,
    firstName,
    lastName,
    email,
    password,
  });

  try {
    await newUser.save();
    return new NextResponse("User has been created successfully", {
      status: 201,
    });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};
