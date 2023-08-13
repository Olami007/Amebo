"use client";

import { useSession } from "next-auth/react";
import React from "react";
import useSWR from "swr";

const GetUserTweets = () => {
  const session = useSession();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/userfeed?username=${session?.data?._doc.username}`,
    fetcher
  );

  console.log(data);
  return (
    <>
      <span>{feed.userFirstName}</span>
    </>
  );
};

export default GetUserTweets;
