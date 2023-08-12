"use client";

import { CreatedAt } from "@/components/CreatedAt/CreatedAt";
import LikeButton from "@/components/LikeButton/LikeButton";
// import Navbar from "@/components/Navbar/Navbar";
import RetweetButton from "@/components/RetweetButton/RetweetButton";
import Spinner from "@/components/Spinner";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import useSWR from "swr";

const Post = () => {
  const session = useSession();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `http://localhost:3000/api/userfeed?username=${session?.data?._doc.username}`,
    fetcher
  );

  console.log(data);
  return (
    <>
      {/* <Navbar />
      <div className="text-center py-4">My Amebo Feeds</div> */}

      <div>
        {isLoading ? (
          <Spinner />
        ) : (
          data?.map((feed) => (
            <div className=" p-8 border-y-2" key={feed?._id}>
              <Link href={`/feeds/${feed._id}`}>
                <div className="flex justify-between align-center">
                  <div>
                    <div className="pb-2">
                      <Link href={`/userfeeds/${feed.userUsername}`}>
                        <span>{feed.userFirstName}</span>
                        <span className="pl-4">{`@${feed.userUsername}`}</span>
                      </Link>
                    </div>
                    <h2>{feed?.content}</h2>
                  </div>
                  <small>{CreatedAt(feed?.createdAt)}</small>
                </div>
              </Link>

              <span className="flex ">
                {" "}
                <LikeButton />
                <RetweetButton />
              </span>
            </div>
          ))
        )}
      </div>
      <Link className="fixed bottom-8 right-8 text-7xl" href="/feeds/compose">
        +
      </Link>
    </>
  );
};

export default Post;
