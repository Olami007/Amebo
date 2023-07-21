"use client";

import Button from "@/components/Button/Button";
import Footer from "@/components/footer/Footer";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const session = useSession();
  const router = useRouter();

  // console.log(session);

  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/feeds");
    }
  }, [session.status, router]);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }
  // if (session.status === "authenticated") {
  //   router?.push("/feeds");
  // }

  return (
    <>
      <main>
        <div>
          <Image
            src="/logo.png"
            width={80}
            height={80}
            alt="logo"
            className="ml-10 mt-4"
          />
        </div>
        <div className="lg:flex items-center justify-around text-center">
          <div className="px-10 lg:w-1/2">
            <h1 className="text-3xl text-center font-bold py-8">
              Whats happening?
            </h1>
            <p className="text-center font-bold text-xl pb-4">
              Join the Amebo train today.
            </p>
            <Button />
            <p className="py-2">or</p>

            {/* <button className="group px-16 py-4 relative  overflow-hidden rounded-full bg-blue-950 text-lg shadow">
              <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-black group-hover:text-white">
                Create account
              </span>
            </button> */}
            <button
              onClick={() => {
                router.push("/auth/login");
              }}
              className="rounded-full shadow text-blue-400 px-8 py-3 border-slate-50 border-2"
            >
              Sign in with email/username
            </button>
            <div className="pt-4">
              <small>
                By signing up, you agree to the{" "}
                <a className="text-blue-400" href="#">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a className="text-blue-400" href="#">
                  Privacy Policy
                </a>
                , including{" "}
                <a className="text-blue-400" href="#">
                  Cookie Use.
                </a>
              </small>
            </div>
            <div className="pt-10">
              <h1 className="text-bold text-xl py-4">Dont have an account?</h1>
              {/* <button className="rounded-full shadow text-blue-400 px-24 py-3 border-slate-50 border-2">
                Sign in
              </button> */}

              <button
                onClick={() => {
                  router.push("/auth/register");
                }}
                className="group px-16 py-4 relative  overflow-hidden rounded-full bg-blue-950 text-lg shadow"
              >
                <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-black group-hover:text-white">
                  Create account
                </span>
              </button>
            </div>
          </div>
          <div className="mx-auto">
            <Image
              src="/amebo.jpg"
              width={400}
              height={400}
              alt="hero"
              className="w-full lg:w-auto h-96 lg:h-[32rem] pt-6"
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
