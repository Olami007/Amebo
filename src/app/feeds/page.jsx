// "use client";

import Navbar from "@/components/Navbar/Navbar";
import { CheckStatus } from "@/components/SessionStatus/Sess";
// import { useSession } from "next-auth/react";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import React from "react";

async function getData() {
  const res = await fetch(`https://amebo-one.vercel.app/api/feeds`, {
    next: { revalidate: 10 },
  });
  // const res = await fetch(`${process.env.BASE_URL}/api/feeds`, {
  //   next: { revalidate: 10 },
  // });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

// const checkStatus = () => {
//   const session = useSession();
//   const router = useRouter();

//   useEffect(() => {
//     console.log(session);
//     if (session.status === "unauthenticated") {
//       router.push("/");
//     }
//     if (session.status === "loading") {
//       return <p>Loading...</p>;
//     }
//   });
// };

const Feed = async () => {
  // checkStatus();

  // const session = useSession();
  // const router = useRouter();

  // useEffect(() => {
  // console.log(session);
  // if (session.status === "unauthenticated") {
  //   router.push("/");
  // }
  // if (session.status === "loading") {
  //   return <p>Loading...</p>;
  // }
  // });

  const feeds = await getData();
  // console.log(feeds, "this is feeds");

  return (
    <>
      <CheckStatus>
        <Navbar />
        <div className="text-center py-4">Feed</div>

        {feeds?.map((feed) => (
          <div className=" p-8 border-y-2" key={feed?._id}>
            {/* <h1>My Post</h1> */}
            <h2>{feed?.content}</h2>
          </div>
        ))}
        <Link className="fixed bottom-8 right-8 text-7xl" href="/feeds/compose">
          +
        </Link>
      </CheckStatus>
    </>
  );
};

export default Feed;
