import { CreatedAt } from "@/components/CreatedAt/CreatedAt";
import Navbar from "@/components/Navbar/Navbar";
import { CheckStatus } from "@/components/SessionStatus/Sess";
import Link from "next/link";
import React from "react";

async function getData() {
  const res = await fetch(`${process.env.BASE_URL}/api/feeds`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

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

  return (
    <>
      <CheckStatus>
        <Navbar />
        <div className="text-center py-4">Feed</div>

        {feeds?.map((feed) => (
          <div className=" p-8 border-y-2" key={feed?._id}>
            {/* <h1>My Post</h1> */}
            <div className="flex justify-between align-center">
              <div>
                <div className="pb-2">
                  <span>{feed.author}</span>
                  <span className="pl-4">{`@${feed.username}`}</span>
                </div>
                <h2>{feed?.content}</h2>
              </div>
              <small>{CreatedAt(feed?.createdAt)}</small>
            </div>
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
