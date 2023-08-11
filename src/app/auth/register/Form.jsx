"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Form = () => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const firstName = e.target[1].value;
    const lastName = e.target[2].value;
    const email = e.target[3].value;
    const password = e.target[4].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          firstName,
          lastName,
          email,
          password,
        }),
      });

      res.status === 201 &&
        router.push("/auth/login?sucess='Account has been created");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex -mx-3">
        <div className="w-1/2 px-3 mb-5">
          <label htmlFor="" className="text-xs font-semibold px-1">
            Username
          </label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
            </div>
            <input
              type="text"
              className="bg-gray-600 w-full -ml-10 pl-6 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="JohnS123"
            />
          </div>
        </div>
        <div className="w-1/2 px-3 mb-5">
          <label htmlFor="" className="text-xs font-semibold px-1">
            First name
          </label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
            </div>
            <input
              type="text"
              className="bg-gray-600 w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="John"
            />
          </div>
        </div>
        <div className="w-1/2 px-3 mb-5">
          <label htmlFor="" className="text-xs font-semibold px-1">
            Last name
          </label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
            </div>
            <input
              type="text"
              className="bg-gray-600 w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="Smith"
            />
          </div>
        </div>
      </div>
      <div className="flex -mx-3">
        <div className="w-full px-3 mb-5">
          <label htmlFor="" className="text-xs font-semibold px-1">
            Email
          </label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
            </div>
            <input
              type="email"
              className="bg-gray-600 w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="johnsmith@example.com"
            />
          </div>
        </div>
      </div>
      <div className="flex -mx-3">
        <div className="w-full px-3 mb-12">
          <label htmlFor="" className="text-xs font-semibold px-1">
            Password
          </label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
            </div>
            <input
              type="password"
              className="bg-gray-600 w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="************"
            />
          </div>
        </div>
      </div>
      <div className="flex -mx-3">
        <div className="w-full px-3 mb-5">
          <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
            REGISTER NOW
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
