// // import { getLoggedInUserDetails } from "./getLoggedInUserDetails";

// import { useSession } from "next-auth/react";
// import { useEffect } from "react";

// // export const fetchUserFeeds = async (userId) => {
// //   getLoggedInUserDetails();
// //   const res = await fetch(`${process.env.BASE_URL}/api/feed/${id}`, {
// //     cache: "no-store",
// //   });

// //   if (!res.ok) {
// //     return notFound();
// //   }
// //   const data = await res.json();
// //   return data;
// // };
// // import { getLoggedInUserDetails } from "./getLoggedInUserDetails";

// // export const fetchUserFeeds = async (userId) => {
// //   useEffect(() => {
// //     const session = useSession();
// //     console.log(session);
// //   }, []);

// // const res = await fetch(`${process.env.BASE_URL}/api/feed/${id}`, {
// //   cache: "no-store",
// // });

// // if (!res.ok) {
// //   return notFound();
// // }
// // const data = await res.json();
// // return data;
// // };

// export const FetchUserFeeds = () => {
//   useEffect(() => {
//     const fetchData = () => {
//       try {
//         // Assuming useSession is a function that fetches the session data
//         const session = useSession();
//         return session;
//         // Here you can perform any logic or API calls related to fetching user feeds
//       } catch (error) {
//         return error;
//       }
//     };
//     fetchData();
//   }, [useSession]);
// };

// // export default fetchUserFeeds;
