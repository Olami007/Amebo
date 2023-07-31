"use client";

import React from "react";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const session = useSession();
  return (
    <>
      <div className="flex justify-around items-center py-8 bg-blue-400">
        <a href="/">AMEBO</a>
        {/* <div>Navbar</div>{" "} */}
        {session.status === "authenticated" && (
          <a href="/dashboard">Dashboard</a>
        )}
        {session.status === "authenticated" && (
          <button onClick={signOut}>Logout</button>
        )}
      </div>
    </>
  );
};

export default Navbar;
