"use client";

import { CreatedAt } from "@/components/CreatedAt/CreatedAt";
import LikeButton from "@/components/LikeButton/LikeButton";
// import Navbar from "@/components/Navbar/Navbar";
import RetweetButton from "@/components/RetweetButton/RetweetButton";
// import Spinner from "@/components/Spinner";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// import useSWR from "swr";
// import { GetData } from "./GetData";

const Post = () => {
  const [data, setData] = useState("");
  const session = useSession();

  const gett = async () => {
    const res = await fetch(
      `/api/userfeed?username=${session?.data?._doc.username}`
    );
    const response = await res.json();
    // console.log(response);
    setData(response);
  };
  useEffect(() => {
    gett();
  }, [session.data]);

  console.log(data);
  return (
    <>
      {data.length > 0 &&
        data.map((feed) => (
          <div className=" p-8 border-y-2" key={feed?._id}>
            {/* <Link href={`/feeds/${feed._id}`}> */}
            <div className="flex justify-between align-center">
              <div>
                <Link href={`/userfeeds/${feed.userUsername}`}>
                  <div className="pb-2">
                    <span>{feed.userFirstName}</span>
                    <span className="pl-4">{`@${feed.userUsername}`}</span>
                  </div>
                </Link>
                <Link href={`/feeds/${feed._id}`}>
                  <h2>{feed?.content}</h2>
                </Link>
              </div>
              <small>{CreatedAt(feed?.createdAt)}</small>
            </div>
            {/* </Link> */}

            <span className="flex ">
              {" "}
              <LikeButton />
              <RetweetButton />
            </span>
          </div>
        ))}
      {/* </div> */}
      <Link className="fixed bottom-8 right-8 text-7xl" href="/feeds/compose">
        +
      </Link>
    </>
  );
};

export default Post;
