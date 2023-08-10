import React from "react";
import LoginComponent from "./Login";
import Navbar from "@/components/Navbar/Navbar";
import Unauth from "./Unauth";

const Login = () => {
  return (
    <>
      <Navbar />

      <Unauth />

      <LoginComponent />
    </>
  );
};

export default Login;
