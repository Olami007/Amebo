"use client";

import { CreatedAt } from "@/components/CreatedAt/CreatedAt";
import LikeButton from "@/components/LikeButton/LikeButton";
import RetweetButton from "@/components/RetweetButton/RetweetButton";
import Link from "next/link";
import useSWR from "swr";
// import { useRouter } from "next/navigation";

const Page = ({ params }) => {
  // const router = useRouter();
  const { username } = params;

  console.log(username);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data: userPosts, error } = useSWR(
    `/api/userfeed?username=${username}`,
    fetcher
  );

  if (error) {
    return <div>Error loading user posts.</div>;
  }

  return (
    <div>
      <h1>Posts by {username}</h1>
      {userPosts ? (
        userPosts?.map((feed) => (
          <div className=" p-8 border-y-2" key={feed?._id}>
            <Link href={`/feeds/${feed._id}`}>
              <div className="flex justify-between align-center">
                <div>
                  <div className="pb-2">
                    <Link href={`/userfeeds/${feed.userUsername}`}>
                      <span>{feed.userFirstName}</span>
                      <span className="pl-4">{`@${feed.userUsername}`}</span>
                    </Link>
                  </div>
                  <h2>{feed?.content}</h2>
                </div>
                <small>{CreatedAt(feed?.createdAt)}</small>
              </div>
            </Link>

            <span className="flex ">
              {" "}
              <LikeButton />
              <RetweetButton />
            </span>
          </div>
        ))
      ) : (
        <div>Loading user posts...</div>
      )}
    </div>
  );
};

export default Page;
