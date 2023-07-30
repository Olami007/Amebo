"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";

const Page = () => {
  const { data: session, status } = useSession();
  const [isReady, setIsReady] = useState(false);
  const [content, setContent] = useState("");

  useEffect(() => {
    if (
      status === "authenticated" &&
      session?._doc?._id &&
      session?._doc?.firstName &&
      session?._doc?.username
    ) {
      setIsReady(true);
    }
  }, [session, status]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isReady) {
      console.log("Session is not ready yet. Please wait.");
      return;
    }

    try {
      const res = await fetch("/api/feed", {
        method: "POST",
        body: JSON.stringify({
          userId: session._doc._id,
          userFirstName: session._doc.firstName,
          userUsername: session._doc.username,
          content,
        }),
      });
      console.log(res),
        // Reset the content after successful submission
        setContent("");
    } catch (error) {
      console.log("submit error", error);
    }
  };

  return (
    <div>
      <Navbar />
      {status === "authenticated" && (
        <form onSubmit={handleSubmit}>
          <button
            className="fixed right-8 top-24 p-2 px-4  bg-blue-400 rounded-3xl"
            type="submit"
          >
            Send
          </button>
          <input
            className="bg-inherit text-white w-full p-8 text-xl border-0 border-transparent my-14"
            placeholder="What is happening?!"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></input>
        </form>
      )}
      <div className="border-b-2 border-gray-800"></div>

      <Footer />
    </div>
  );
};

export default Page;
