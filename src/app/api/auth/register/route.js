import connect from "@/utils/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { username, firstName, lastName, email, password } = await req.json();
  await connect();

  const newUser = new User({ username, firstName, lastName, email, password });

  try {
    await newUser.save();
    return new NextResponse("User has been created successfully", {
      status: 201,
    });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};
