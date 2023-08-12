"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function redirectToSignInIfNoToken(Component) {
  return function ProtectedRoute({ ...props }) {
    const session = useSession();
    const router = useRouter();
    useEffect(() => {
      if (session.status === "unauthenticated") {
        router.push("/auth/login");
      }
    }, [router, session]);

    return <Component {...props} />;
  };
}
