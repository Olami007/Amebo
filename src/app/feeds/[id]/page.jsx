import { CreatedAt } from "@/components/CreatedAt/CreatedAt";
import { getSingleData } from "@/components/FetchSingleData/FetchSingleData";
import LikeButton from "@/components/LikeButton/LikeButton";
import Navbar from "@/components/Navbar/Navbar";
import RetweetButton from "@/components/RetweetButton/RetweetButton";
import Link from "next/link";
import React from "react";

const page = async ({ params }) => {
  const feed = await getSingleData(params.id);

  return (
    <>
      <Navbar />

      {/* <div>page</div> */}
      <div className=" p-8 border-y-2" key={feed?._id}>
        {/* <h1>My Post</h1> */}
        <div className="flex justify-between align-center">
          <div>
            <Link href={`/userfeeds/${feed.userUsername}`}>
              <div className="pb-2">
                <span>{feed.userFirstName}</span>
                <span className="pl-4">{`@${feed.userUsername}`}</span>
              </div>
            </Link>
            <h2>{feed?.content}</h2>
          </div>
          <small>{CreatedAt(feed?.createdAt)}</small>
        </div>
        <span className="flex ">
          {" "}
          <LikeButton />
          <RetweetButton />
        </span>
      </div>
    </>
  );
};

export default page;
