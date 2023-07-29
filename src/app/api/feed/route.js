import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Feeds from "@/models/Feed";

export const GET = async (req) => {
  try {
    await connect();

    const allFeeds = await Feeds.find();
    return new NextResponse(JSON.stringify(allFeeds), { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};

export const POST = async (req) => {
  const body = await req.json();
  const newPost = new Feeds(body);
  console.log(newPost);
  try {
    await connect();

    await newPost.save();

    return new NextResponse("Feed has been created", { status: 201 });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};
