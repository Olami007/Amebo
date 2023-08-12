import { CreatedAt } from "@/components/CreatedAt/CreatedAt";
import LikeButton from "@/components/LikeButton/LikeButton";
import Navbar from "@/components/Navbar/Navbar";
import RetweetButton from "@/components/RetweetButton/RetweetButton";
import Footer from "@/components/footer/Footer";
import Link from "next/link";

const Page = async ({ params }) => {
  const { username } = params;

  const res = await fetch(
    `${process.env.BASE_URL}/api/userfeed?username=${username}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return notFound();
  }

  const data = await res.json();

  console.log(data);
  return (
    <>
      <Navbar />

      <div>
        <h1 className="text-center pb-4 pt-4">Posts by {username}</h1>
        {data?.map((feed) => (
          <div className=" p-8 border-y-2" key={feed?._id}>
            <Link href={`/feeds/${feed._id}`}>
              <div className="flex justify-between align-center">
                <div>
                  <div className="pb-2">
                    {/* <Link href={`/userfeeds/${feed.userUsername}`}> */}
                    <span>{feed.userFirstName}</span>
                    <span className="pl-4">{`@${feed.userUsername}`}</span>
                    {/* </Link> */}
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
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Page;
