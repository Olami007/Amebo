"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
// import styles from "./page.module.css";

const LoginComponent = () => {
  //   const [unauthorizedVisit, setUnauthorizedVisit] = useState(false);
  const session = useSession();
  const router = useRouter();

  if (session.status === "authenticated") {
    router?.push("/feeds");
  }

  //   const searchParams = useSearchParams();
  //   useEffect(() => {
  //     const search = searchParams.get("login");
  //     if (search === "unauthenticatedUser") {
  //       setUnauthorizedVisit(true);
  //     }
  //   }, [unauthorizedVisit]);

  const handleClick = (e) => {
    e.preventDefault();

    const emailUsername = e.target[0].value;
    const password = e.target[1].value;
    // console.log(emailUsername, password);

    signIn("credentials", { emailUsername, password });
  };

  return (
    <>
      {/* {unauthorizedVisit && (
        <div className={`${styles.popUp} ${styles.slideIn}`}>
          Unauthorized Visitor
        </div>
      )} */}
      <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
        <section className="flex w-[30rem] flex-col space-y-10">
          <div className="text-center text-4xl font-medium">Welcome Back</div>
          <div className="text-center text-2xl font-medium">Log In</div>
          <form className="relative" onSubmit={handleClick}>
            <div className="my-4 w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
              <input
                type="text"
                placeholder="Email or Username"
                className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              />
            </div>

            <div className="my-4 w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
              <input
                type="password"
                placeholder="Password"
                className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              />
            </div>

            <button className="transform rounded-lg bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-200 p-4 absolute right-8">
              LOG IN
            </button>
          </form>

          <a
            href="#"
            className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300 pt-4"
          >
            FORGOT PASSWORD?
          </a>

          <p className="text-center text-lg">
            Do not have an account yet?{" "}
            <a
              href="/auth/register"
              className="font-medium text-indigo-500 underline-offset-4 hover:underline"
            >
              {" "}
              Create One
            </a>
          </p>
        </section>
      </main>
    </>
  );
};

export default LoginComponent;
