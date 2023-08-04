import connect from "@/utils/db";
import Feeds from "@/models/Feed";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { id } = params;
  try {
    await connect();

    const singleFeed = await Feeds.findById(id);
    return new NextResponse(JSON.stringify(singleFeed), { status: 200 });
  } catch (error) {
    return new NextResponse(error);
  }
};

export const DELETE = async (req, { params }) => {
  const { id } = params;
  try {
    await connect();

    await Feeds.findByIdAndDelete(id);

    return new NextResponse("Feed has been deleted", { status: 200 });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};
