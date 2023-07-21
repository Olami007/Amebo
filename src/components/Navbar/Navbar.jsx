"use client";

import React from "react";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const session = useSession();
  return (
    <>
      <div>Navbar</div>{" "}
      {session.status === "authenticated" && (
        <button onClick={signOut}>Logout</button>
      )}
    </>
  );
};

export default Navbar;
