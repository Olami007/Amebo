import Image from "next/image";

export default function Home() {
  return (
    <main className="lg:flex items-center justify-around text-center">
      <div className="px-10 lg:w-1/2">
        <h1 className="text-4xl text-center font-bold py-8">
          What is happening?
        </h1>
        <p className="text-center font-bold text-xl pb-4">
          Join the Amebo train today.
        </p>
        <div className="text-center">
          <button className="rounded-full bg-white shadow text-black px-12 py-4">
            Sign Up with Google
          </button>
        </div>
        <p>or</p>

        <button className="group px-14 py-4 relative  overflow-hidden rounded-full bg-blue-950 text-lg shadow">
          <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <span className="relative text-black group-hover:text-white">
            Create account
          </span>
        </button>
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
    </main>
  );
}
