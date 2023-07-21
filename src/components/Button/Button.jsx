"use client";

import React from "react";
import { signIn } from "next-auth/react";

const Button = () => {
  return (
    <button
      className="text-center my-4 rounded-full bg-white shadow text-black px-12 py-4"
      onClick={() => signIn("google")}
    >
      <i className="fa-brands fa-google text-red-400 pr-1.5"></i> Sign In with
      Google
    </button>
  );
};

export default Button;
