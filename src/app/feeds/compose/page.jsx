"use client";

// import Navbar from "@/components/Navbar/Navbar";
// import { useSession } from "next-auth/react";
// import React from "react";

// const page = async () => {
//   // try {
//   //   const sess = useSession();

//   //   const { _doc } = sess.data;
//   //   console.log(_doc);
//   // } catch (error) {
//   //   console.log(error);
//   // }
//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   const body = e.target[1].value;
//   //   // const username = _doc.username;
//   //   console.log(body, _doc);
//   // };
//   const { data: session } = useSession();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // const userId = session?._doc._id;
//     // const userFirstName = session?._doc.firstName;
//     // const userUsername = session?._doc.username;
//     // const content = e.target[1].value;

//     // console.log(userId, userFirstName, userUsername, content);

//     try {
//       await fetch("/api/feeds", {
//         method: "POST",
//         body: JSON.stringify({
//           userId: session._doc._id,
//           userFirstName: session._doc.firstName,
//           userUsername: session._doc.username,
//           content: e.target[1].value,
//         }),
//       });
//       // console.log(userId, userFirstName, userUsername, content);
//     } catch (error) {
//       console.log("submit error", error);
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <form onSubmit={handleSubmit}>
//         <button className="fixed right-8 top-24 p-2 px-4  bg-blue-400 rounded-3xl">
//           Send
//         </button>
//         <input
//           className="bg-inherit text-white w-full p-8 text-xl border-0 border-transparent my-14"
//           placeholder="What is happening?!"
//         ></input>
//       </form>
//       <div className="border-b-2 border-gray-800">
//         {/* {sessionDeet?._doc?.username} */}
//       </div>
//     </div>
//   );
// };

// export default page;

import Navbar from "@/components/Navbar/Navbar";
import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";

const Page = () => {
  const { data: session, status } = useSession();
  const [isReady, setIsReady] = useState(false);
  const [content, setContent] = useState("");

  useEffect(() => {
    if (
      status === "authenticated" &&
      session?._doc?._id &&
      session?._doc?.firstName &&
      session?._doc?.username
    ) {
      setIsReady(true);
    }
  }, [session, status]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isReady) {
      console.log("Session is not ready yet. Please wait.");
      return;
    }

    try {
      await fetch("/api/feeds", {
        method: "POST",
        body: JSON.stringify({
          userId: session._doc._id,
          userFirstName: session._doc.firstName,
          userUsername: session._doc.username,
          content,
        }),
      });
      // console.log(body);
      // Reset the content after successful submission
      setContent("");
    } catch (error) {
      console.log("submit error", error);
    }
  };

  return (
    <div>
      <Navbar />
      {status === "authenticated" && (
        <form onSubmit={handleSubmit}>
          <button
            className="fixed right-8 top-24 p-2 px-4  bg-blue-400 rounded-3xl"
            type="submit"
          >
            Send
          </button>
          <input
            className="bg-inherit text-white w-full p-8 text-xl border-0 border-transparent my-14"
            placeholder="What is happening?!"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></input>
        </form>
      )}
      <div className="border-b-2 border-gray-800"></div>
    </div>
  );
};

export default Page;
