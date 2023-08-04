"use client";

import { fetchUserFeeds } from "@/utils/fetchUserFeeds";
import React from "react";

async function getData() {
  await fetchUserFeeds();

  const res = await fetch(`${process.env.BASE_URL}/api/userfeed`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}
const page = async () => {
  const feeds = await getData();
  //   console.log(feeds);
  return <div>page</div>;
};

export default page;
