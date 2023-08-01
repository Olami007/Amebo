import { CreatedAt } from "@/components/CreatedAt/CreatedAt";
import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";
import React from "react";

async function getData() {
  const res = await fetch(`${process.env.BASE_URL}/api/feed`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

const Feed = async () => {
  const feeds = await getData();

  return (
    <>
      {/* <CheckStatus> */}
      <Navbar />
      <div className="text-center py-4">Feed</div>

      {feeds?.map((feed) => (
        <div className=" p-8 border-y-2" key={feed?._id}>
          {/* <h1>My Post</h1> */}
          <div className="flex justify-between align-center">
            <div>
              <div className="pb-2">
                <span>{feed.userFirstName}</span>
                <span className="pl-4">{`@${feed.userUsername}`}</span>
              </div>
              <h2>{feed?.content}</h2>
            </div>
            <small>{CreatedAt(feed?.createdAt)}</small>
          </div>
          <div>
            <i className="fa-solid fa-heart pt-4 pb-0 pl-10"></i>
          </div>
        </div>
      ))}
      <Link className="fixed bottom-8 right-8 text-7xl" href="/feeds/compose">
        +
      </Link>
      {/* </CheckStatus> */}
    </>
  );
};

export default Feed;
