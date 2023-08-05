"use client";

import { CreatedAt } from "@/components/CreatedAt/CreatedAt";
import LikeButton from "@/components/LikeButton/LikeButton";
import Navbar from "@/components/Navbar/Navbar";
import RetweetButton from "@/components/RetweetButton/RetweetButton";
import { useSession } from "next-auth/react";
import React from "react";
import useSWR from "swr";

const page = () => {
  const session = useSession();
  console.log(session);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `http://localhost:3000/api/userfeed?username=${session?.data?._doc.username}`,
    fetcher
  );

  console.log(data);
  return (
    <>
      <Navbar />
      <div className="text-center py-4">My Amebo Feeds</div>

      <div>
        {isLoading ? (
          <div className="text-center">loading</div>
        ) : (
          data?.map((feed) => (
            <div className=" p-8 border-y-2" key={feed?._id}>
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

              <span className="flex ">
                {" "}
                <LikeButton />
                <RetweetButton />
              </span>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default page;
