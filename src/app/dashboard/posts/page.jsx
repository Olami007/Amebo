import React from "react";
import Post from "./Post";
import { getServerSession } from "next-auth";
import { handler } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await getServerSession(handler);

  if (!session) {
    return redirect("/auth/login?login=unauthenticatedUser");
  }
  console.log(session, "serversession");
  return <Post />;
};

export default Page;
