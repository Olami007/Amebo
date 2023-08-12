"use client";

import { useRouter } from "next/navigation";
import React from "react";

const CreateAnAccountButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.push("/auth/register");
      }}
      className="group px-16 py-4 relative  overflow-hidden rounded-full bg-blue-950 text-lg shadow"
    >
      <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
      <span className="relative text-black group-hover:text-white">
        Create account
      </span>
    </button>
  );
};

export default CreateAnAccountButton;
