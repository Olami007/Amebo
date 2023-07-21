"use client";

import React from "react";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const session = useSession();
  return (
    <>
      <div className="flex justify-around items-center py-8 bg-blue-400">
        <h1>AMEBO</h1>
        <div>Navbar</div>{" "}
        {session.status === "authenticated" && (
          <button onClick={signOut}>Logout</button>
        )}
      </div>
    </>
  );
};

export default Navbar;
