import { useSession } from "next-auth/react";
export const GetLoggedInUserDetails = async () => {
  const session = useSession();

  return session, "session";
};
