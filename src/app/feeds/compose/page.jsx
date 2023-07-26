"use client";

import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const page = () => {
  const handleSubmit = () => {
    console.log("first");
  };
  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        {/* <input type="text" placeholder="Title" />
        <input type="text" placeholder="Desc" />
        <input type="text" placeholder="Image" /> */}
        <button className="fixed right-8 top-24 p-2 px-4  bg-blue-400 rounded-3xl">
          Send
        </button>
        <textarea
          className="bg-inherit text-white w-full p-8 text-xl border-0 border-transparent my-14"
          placeholder="What is happening?!"
        ></textarea>
      </form>
      <div className="border-b-2 border-gray-800"></div>
    </div>
  );
};

export default page;
