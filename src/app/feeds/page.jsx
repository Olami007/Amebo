"use client";

import Navbar from "@/components/Navbar/Navbar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Feed = () => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/");
    }
  }, [session.status, router]);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }
  return (
    <>
      <Navbar />
      <div>Feed</div>
    </>
  );
};

export default Feed;
