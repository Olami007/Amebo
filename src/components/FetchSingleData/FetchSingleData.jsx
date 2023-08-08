export const getSingleData = async (id) => {
  const res = await fetch(`${process.env.BASE_URL}/api/feed/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }
  const data = await res.json();
  return data;
};
// export const getUserFeeds = async (userUsername) => {
//   const res = await fetch(`${process.env.BASE_URL}/api/feed/${userUsername}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     return notFound();
//   }
//   const data = await res.json();
//   return data;
// };
