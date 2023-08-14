"use client";

import { useSession } from "next-auth/react";

export const GetData = () => {
  const session = useSession();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/userfeed?username=${session?.data?._doc.username}`,
    fetcher
  );
};
