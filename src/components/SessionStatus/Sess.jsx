"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const CheckStatus = ({ children }) => {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    console.log(session);
    if (session.status === "unauthenticated") {
      router.push("/");
    }
  }, [session.status, router]);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }
  if (session.status === "authenticated") {
    return <>{children}</>;
  }
};
