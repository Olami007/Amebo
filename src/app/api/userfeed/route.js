import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Feeds from "@/models/Feed";

export const GET = async (req) => {
  const url = new URL(req.url);

  const username = url.searchParams.get("username");
  // console.log(username, "here i am");
  try {
    await connect();

    const allFeeds = await Feeds.find({ userUsername: username });

    return new NextResponse(JSON.stringify(allFeeds), { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};
