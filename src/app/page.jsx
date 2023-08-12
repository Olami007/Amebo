import Button from "@/components/Buttons/Button";
import Footer from "@/components/footer/Footer";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { handler } from "./api/auth/[...nextauth]/route";
import SignInWithEmailButton from "@/components/Buttons/SignInWithEmailButton";
import CreateAnAccountButton from "@/components/Buttons/CreateAnAccountButton";
import { redirect } from "next/navigation";

/* eslint-disable */

export default async function Home() {
  const session = await getServerSession(handler);

  if (session.user) {
    return redirect("/feeds");
  }

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
              What's happening?
            </h1>
            <p className="text-center font-bold text-xl pb-4">
              Join the Amebo train today.
            </p>
            <Button />
            <p className="py-2">or</p>

            <SignInWithEmailButton />

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
              <h1 className="text-bold text-xl py-4">Don't have an account?</h1>

              <CreateAnAccountButton />
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
