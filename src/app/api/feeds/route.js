import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Feed from "@/models/Feeds";

export const GET = async (req) => {
  try {
    await connect();

    const Feeds = await Feed.find();
    return new NextResponse(JSON.stringify(Feeds), { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};

export const POST = async (req) => {
  const body = await req.json();

  const newPost = new Feed(body);

  try {
    await connect();

    await newPost.save();

    return new NextResponse("Feed has been created", { status: 201 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};
