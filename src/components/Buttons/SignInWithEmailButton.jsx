"use client";

import { useRouter } from "next/navigation";
import React from "react";

const SignInWithEmailButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/auth/login");
      }}
      className="rounded-full shadow text-blue-400 px-8 py-3 border-slate-50 border-2"
    >
      Sign in with email/username
    </button>
  );
};

export default SignInWithEmailButton;
