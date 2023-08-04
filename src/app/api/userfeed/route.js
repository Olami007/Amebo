import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Feeds from "@/models/Feed";
import { useSession } from "next-auth/react";
// import { getLoggedInUserDetails } from "@/utils/getLoggedInUserDetails";

export const GET = async (req) => {
  // getLoggedInUserDetails();
  try {
    await connect();

    const allFeeds = await Feeds.find({ userUsername: "john" });

    return new NextResponse(JSON.stringify(allFeeds), { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};
