// export const getSingleData = async (id) => {
//   const res = await fetch(`${process.env.BASE_URL}/api/feed/${id}`, {
//     next: { revalidate: 10 },
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   const data = await res.json();
//   return data;
// };

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
