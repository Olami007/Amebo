"use client";

import redirectToSignInIfNoToken from "@/utils/authCheck";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const DashboardForm = () => {
  redirectToSignInIfNoToken();
  const { data: session, status } = useSession();
  // console.log(status);

  const [usernameValue, setUsernameValue] = useState("");
  const [firstNameValue, setfirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const [passwordVisible, setPasswordVisible] = useState(false);

  const router = useRouter();
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/login");
    }
  }, [router, session]);

  useEffect(() => {
    if (session?._doc) {
      setUsernameValue(session._doc.username);
      setfirstNameValue(session._doc.firstName);
      setLastNameValue(session._doc.lastName);
      setEmailValue(session._doc.email);
      setPasswordValue(session._doc.password);
    }
  }, [session?._doc]);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevValue) => !prevValue);
  };
  return (
    <div>
      <form className="pt-8">
        <div className="flex py-3 justify-around">
          <label htmlFor="username">Username</label>

          <input
            className="p-2 text-center"
            type="text"
            id="username"
            disabled
            value={usernameValue}
          />
        </div>
        <div className="flex py-3 justify-around">
          <label htmlFor="firstName">First Name</label>

          <input
            className="p-2 text-center"
            type="text"
            id="firstName"
            disabled
            value={firstNameValue}
          />
        </div>
        <div className="flex py-3 justify-around">
          <label htmlFor="lastName">Last Name</label>

          <input
            className="p-2 text-center"
            type="text"
            id="lastName"
            disabled
            value={lastNameValue}
          />
        </div>
        <div className="flex py-3 justify-around">
          <label htmlFor="email">Email</label>

          <input
            className="p-2 text-center"
            type="text"
            id="email"
            disabled
            value={emailValue}
          />
        </div>
        <div className="flex py-3 justify-around">
          <label htmlFor="password">Password</label>

          <input
            className="p-2 text-center"
            type={passwordVisible ? "text" : "password"}
            id="password"
            disabled
            value={passwordValue}
          />
          <span
            className={
              passwordVisible ? "fa-solid fa-eye-slash" : "fa fa-fw fa-eye"
            }
            onClick={togglePasswordVisibility}
          ></span>
        </div>
      </form>
    </div>
  );
};

export default DashboardForm;
