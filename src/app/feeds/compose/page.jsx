"use client";

import Navbar from "@/components/Navbar/Navbar";
// import { useSession } from "next-auth/react";
import React from "react";

// async function getUserDetails() {
//   const session = useSession();
//   return await session;
// }
const page = async () => {
  // getUserDetails();
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = e.target[1].value;
    console.log(body);
  };
  // const sessionDeet = await SessionDetails();
  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <button className="fixed right-8 top-24 p-2 px-4  bg-blue-400 rounded-3xl">
          Send
        </button>
        <input
          className="bg-inherit text-white w-full p-8 text-xl border-0 border-transparent my-14"
          placeholder="What is happening?!"
        ></input>
      </form>
      <div className="border-b-2 border-gray-800">
        {/* {sessionDeet?._doc?.username} */}
      </div>
    </div>
  );
};

export default page;
