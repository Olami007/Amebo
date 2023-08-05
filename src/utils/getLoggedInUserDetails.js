import { useSession } from "next-auth/react";
export const getLoggedInUserDetails = async () => {
  const session = useSession();

  return session, "session";
};
